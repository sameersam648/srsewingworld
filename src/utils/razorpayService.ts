import {
  RazorpayOptions,
  RazorpayResponse,
  RazorpayOrderData,
  OrderDetails,
  getRazorpayKey,
  generateOrderId,
  generateReceiptId,
  convertToPaise,
  convertFromPaise,
  formatAmount,
  getCustomerDetails,
  saveCustomerDetails,
  logPaymentEvent,
  PAYMENT_ERROR_MESSAGES,
} from './razorpayConfig';

// Declare Razorpay types for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

export class RazorpayService {
  private static instance: RazorpayService;
  private isRazorpayLoaded = false;
  private loadingPromise: Promise<void> | null = null;

  private constructor() {}

  public static getInstance(): RazorpayService {
    if (!RazorpayService.instance) {
      RazorpayService.instance = new RazorpayService();
    }
    return RazorpayService.instance;
  }

  // Load Razorpay script dynamically
  private loadRazorpayScript(): Promise<void> {
    if (this.isRazorpayLoaded) {
      return Promise.resolve();
    }

    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        this.isRazorpayLoaded = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        this.isRazorpayLoaded = true;
        logPaymentEvent('Razorpay script loaded');
        resolve();
      };
      script.onerror = () => {
        logPaymentEvent('Failed to load Razorpay script');
        reject(new Error('Failed to load Razorpay script'));
      };
      document.head.appendChild(script);
    });

    return this.loadingPromise;
  }

  // Create order data for Razorpay
  private createOrderData(
    amount: number,
    items: Array<{ id: number; name: string; price: number; quantity: number }>,
    customerDetails?: { name?: string; email?: string; phone?: string }
  ): RazorpayOrderData {
    const orderId = generateOrderId();
    const receiptId = generateReceiptId();
    
    const notes: Record<string, string> = {
      order_id: orderId,
      items: JSON.stringify(items.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))),
      customer: JSON.stringify(customerDetails || {}),
      timestamp: new Date().toISOString(),
    };

    return {
      amount: convertToPaise(amount),
      currency: 'INR',
      receipt: receiptId,
      notes,
    };
  }

  // Initialize payment
  public async initializePayment(
    amount: number,
    items: Array<{ id: number; name: string; price: number; quantity: number }>,
    customerDetails?: { name?: string; email?: string; phone?: string },
    onSuccess?: (response: RazorpayResponse, orderDetails: OrderDetails) => void,
    onFailure?: (error: any) => void,
    onCancel?: () => void
  ): Promise<void> {
    try {
      logPaymentEvent('Initializing payment', { amount, itemsCount: items.length });

      // Validate input
      if (!amount || amount <= 0) {
        throw new Error(PAYMENT_ERROR_MESSAGES.INVALID_AMOUNT);
      }

      if (!items || items.length === 0) {
        throw new Error('No items in cart');
      }

      // Load Razorpay script
      await this.loadRazorpayScript();

      // Get customer details
      const customer = customerDetails || getCustomerDetails();
      
      // Save customer details for future use
      if (customerDetails) {
        saveCustomerDetails(customerDetails);
      }

      // For testing purposes, we'll use a simpler approach
      // In production, this should be a server-side API call
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      
      // Prepare Razorpay options with minimal required fields
      const options: RazorpayOptions = {
        key: getRazorpayKey(),
        amount: convertToPaise(amount),
        currency: 'INR',
        name: 'SR Sewing World',
        description: `Order for ${items.length} item(s)`,
        order_id: orderId,
        prefill: {
          name: customer.name || '',
          email: customer.email || '',
          contact: customer.phone || '',
        },
        notes: {
          items: JSON.stringify(items.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))),
          customer: JSON.stringify(customer),
          timestamp: new Date().toISOString(),
        },
        theme: {
          color: '#ff416c',
        },
        handler: (response: RazorpayResponse) => {
          this.handlePaymentSuccess(response, { amount: convertToPaise(amount), currency: 'INR', receipt: '', notes: {} }, items, customer, onSuccess);
        },
        modal: {
          ondismiss: () => {
            logPaymentEvent('Payment modal dismissed');
            if (onCancel) {
              onCancel();
            }
          },
        },
      };

      // Initialize Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();

      logPaymentEvent('Razorpay checkout opened', { orderId, amount });

    } catch (error) {
      logPaymentEvent('Payment initialization failed', { error });
      if (onFailure) {
        onFailure(error);
      }
    }
  }

  // Handle successful payment
  private handlePaymentSuccess(
    response: RazorpayResponse,
    orderData: RazorpayOrderData,
    items: Array<{ id: number; name: string; price: number; quantity: number }>,
    customer: { name?: string; email?: string; phone?: string },
    onSuccess?: (response: RazorpayResponse, orderDetails: OrderDetails) => void
  ): void {
    try {
      logPaymentEvent('Payment successful', response);

      // Create order details
      const orderDetails: OrderDetails = {
        id: response.razorpay_order_id,
        amount: convertFromPaise(orderData.amount),
        currency: orderData.currency,
        items,
        customer,
        timestamp: Date.now(),
        status: 'completed',
      };

      // Store order details in localStorage
      this.storeOrderDetails(orderDetails);

      // Call success callback
      if (onSuccess) {
        onSuccess(response, orderDetails);
      }

      // Log order completion
      logPaymentEvent('Order completed', orderDetails);

    } catch (error) {
      logPaymentEvent('Error handling payment success', { error });
    }
  }

  // Create order on server (mock implementation)
  private async createOrderOnServer(orderData: RazorpayOrderData): Promise<string> {
    // In a real implementation, this would be an API call to your backend
    // For now, we'll simulate the order creation and handle errors properly
    
    logPaymentEvent('Creating order on server', orderData);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For testing purposes, we'll create a mock order ID
      // In production, this should be a real API call to your backend
      const mockOrderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      
      logPaymentEvent('Order created successfully', { orderId: mockOrderId });
      return mockOrderId;
      
    } catch (error) {
      logPaymentEvent('Order creation failed', { error });
      throw new Error('Failed to create order. Please try again.');
    }
  }

  // Store order details in localStorage
  private storeOrderDetails(orderDetails: OrderDetails): void {
    try {
      const existingOrders = this.getOrderHistory();
      existingOrders.unshift(orderDetails);
      
      // Keep only last 10 orders
      if (existingOrders.length > 10) {
        existingOrders.splice(10);
      }
      
      localStorage.setItem('srsewingworld-orders', JSON.stringify(existingOrders));
      logPaymentEvent('Order details stored', { orderId: orderDetails.id });
    } catch (error) {
      logPaymentEvent('Error storing order details', { error });
    }
  }

  // Get order history from localStorage
  public getOrderHistory(): OrderDetails[] {
    try {
      const orders = localStorage.getItem('srsewingworld-orders');
      return orders ? JSON.parse(orders) : [];
    } catch (error) {
      logPaymentEvent('Error retrieving order history', { error });
      return [];
    }
  }

  // Get specific order by ID
  public getOrderById(orderId: string): OrderDetails | null {
    const orders = this.getOrderHistory();
    return orders.find(order => order.id === orderId) || null;
  }

  // Verify payment signature (should be done server-side in production)
  public verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string
  ): boolean {
    // In production, this verification should be done on the server-side
    // for security reasons. This is just a placeholder.
    logPaymentEvent('Payment signature verification', { orderId, paymentId });
    return true;
  }

  // Process cart items for payment
  public processCartItems(
    cartItems: Array<{ id: number; name: string; salePrice: number; quantity: number }>,
    customerDetails?: { name?: string; email?: string; phone?: string },
    onSuccess?: (response: RazorpayResponse, orderDetails: OrderDetails) => void,
    onFailure?: (error: any) => void,
    onCancel?: () => void
  ): Promise<void> {
    if (!cartItems || cartItems.length === 0) {
      const error = new Error('Cart is empty');
      if (onFailure) {
        onFailure(error);
      }
      return Promise.reject(error);
    }

    const totalAmount = cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
    
    const items = cartItems.map(item => ({
      id: item.id,
      name: item.name,
      price: item.salePrice,
      quantity: item.quantity,
    }));

    return this.initializePayment(totalAmount, items, customerDetails, onSuccess, onFailure, onCancel);
  }

  // Get payment status
  public getPaymentStatus(orderId: string): 'pending' | 'completed' | 'failed' | 'unknown' {
    const order = this.getOrderById(orderId);
    return order ? order.status : 'unknown';
  }

  // Clear order history
  public clearOrderHistory(): void {
    localStorage.removeItem('srsewingworld-orders');
    logPaymentEvent('Order history cleared');
  }

  // Get payment statistics
  public getPaymentStats(): {
    totalOrders: number;
    totalAmount: number;
    averageOrderValue: number;
    lastOrderDate?: Date;
  } {
    const orders = this.getOrderHistory();
    const completedOrders = orders.filter(order => order.status === 'completed');
    
    const totalOrders = completedOrders.length;
    const totalAmount = completedOrders.reduce((sum, order) => sum + order.amount, 0);
    const averageOrderValue = totalOrders > 0 ? totalAmount / totalOrders : 0;
    const lastOrderDate = orders.length > 0 ? new Date(orders[0].timestamp) : undefined;

    return {
      totalOrders,
      totalAmount,
      averageOrderValue,
      lastOrderDate,
    };
  }

  // Initialize payment without server-side order creation (for testing)
  public async initializePaymentWithoutOrder(
    amount: number,
    items: Array<{ id: number; name: string; price: number; quantity: number }>,
    customerDetails?: { name?: string; email?: string; phone?: string },
    onSuccess?: (response: RazorpayResponse, orderDetails: OrderDetails) => void,
    onFailure?: (error: any) => void,
    onCancel?: () => void
  ): Promise<void> {
    try {
      logPaymentEvent('Initializing payment without order', { amount, itemsCount: items.length });

      // Validate input
      if (!amount || amount <= 0) {
        throw new Error(PAYMENT_ERROR_MESSAGES.INVALID_AMOUNT);
      }

      if (!items || items.length === 0) {
        throw new Error('No items in cart');
      }

      // Load Razorpay script
      await this.loadRazorpayScript();

      // Get customer details
      const customer = customerDetails || getCustomerDetails();
      
      // Save customer details for future use
      if (customerDetails) {
        saveCustomerDetails(customerDetails);
      }

      // Use Razorpay's client-side approach (no order_id required)
      const options: any = {
        key: getRazorpayKey(),
        amount: convertToPaise(amount),
        currency: 'INR',
        name: 'SR Sewing World',
        description: `Order for ${items.length} item(s)`,
        prefill: {
          name: customer.name || '',
          email: customer.email || '',
          contact: customer.phone || '',
        },
        notes: {
          items: JSON.stringify(items.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))),
          customer: JSON.stringify(customer),
          timestamp: new Date().toISOString(),
        },
        theme: {
          color: '#ff416c',
        },
        handler: (response: RazorpayResponse) => {
          // Create order details after successful payment
          const orderDetails: OrderDetails = {
            id: response.razorpay_payment_id,
            amount: amount,
            currency: 'INR',
            items,
            customer,
            timestamp: Date.now(),
            status: 'completed',
          };
          
          // Store order details
          this.storeOrderDetails(orderDetails);
          
          // Call success callback
          if (onSuccess) {
            onSuccess(response, orderDetails);
          }
          
          logPaymentEvent('Payment completed successfully', { response, orderDetails });
        },
        modal: {
          ondismiss: () => {
            logPaymentEvent('Payment modal dismissed');
            if (onCancel) {
              onCancel();
            }
          },
        },
      };

      // Initialize Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();

      logPaymentEvent('Razorpay checkout opened (without order)', { amount });

    } catch (error) {
      logPaymentEvent('Payment initialization failed', { error });
      if (onFailure) {
        onFailure(error);
      }
    }
  }
}

// Export singleton instance
export const razorpayService = RazorpayService.getInstance(); 