export interface Post {
    id: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    content: string; // Full blog post content in Markdown or HTML
  }
  
  export const posts: Post[] = [
    {
      id: 'beginners-guide-to-buying-sewing-machine',
      title: "A Beginner's Guide to Buying Your First Sewing Machine",
      category: 'Buying Guide',
      date: 'October 26, 2024',
      image: '/images/usha_wonder_stich_plus.jpg',
      excerpt: 'Choosing your first sewing machine can be exciting, but also overwhelming. Our guide breaks down the key features to look for...',
      content: `
        <h2>Choosing your first sewing machine is a major step. Here's what to consider.</h2>
        <p>Embarking on your sewing journey is exciting, but choosing the right machine can feel overwhelming. With so many options available, from basic mechanical models to advanced computerized systems, it's important to understand what features matter most for beginners.</p>
        
        <img src="/images/usha_wonder_stich_plus.jpg" alt="Usha Wonder Stitch Plus - Perfect for Beginners" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>Mechanical vs. Computerized</h3>
        <p>This is the first big decision every new sewer faces. Mechanical machines are simpler and more affordable, making them perfect for learning the basics. They're reliable, easy to maintain, and great for fundamental sewing tasks.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <img src="/images/usha_wonder_stich.jpg" alt="Mechanical Sewing Machine" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #1e293b; margin-bottom: 8px;">Mechanical Machines</h4>
            <ul style="font-size: 14px; color: #475569; line-height: 1.6;">
              <li>• Simple and reliable</li>
              <li>• More affordable</li>
              <li>• Easy to maintain</li>
              <li>• Perfect for beginners</li>
            </ul>
          </div>
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <img src="/images/usha_excella_dlx.jpg" alt="Computerized Sewing Machine" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #1e293b; margin-bottom: 8px;">Computerized Machines</h4>
            <ul style="font-size: 14px; color: #475569; line-height: 1.6;">
              <li>• Advanced features</li>
              <li>• Multiple stitch patterns</li>
              <li>• Digital displays</li>
              <li>• Higher price point</li>
            </ul>
          </div>
        </div>
        
        <h3>Key Features to Look For</h3>
        <ul>
          <li><strong>Stitch Options:</strong> You don't need hundreds of stitches to start. A quality beginner machine should have at least 15-20 stitches including straight, zigzag, and buttonhole stitches.</li>
          <li><strong>Presser Feet:</strong> Check what feet are included. Essential feet include a zipper foot, buttonhole foot, and general-purpose foot.</li>
          <li><strong>Build Quality:</strong> A metal frame provides better stability and durability compared to plastic frames.</li>
          <li><strong>Speed Control:</strong> Look for adjustable speed settings to help you sew at a comfortable pace while learning.</li>
        </ul>
        
        <img src="/images/usha_stich_magic.jpg" alt="Essential Sewing Machine Accessories and Features" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>Recommended Beginner Models</h3>
        <p>Based on our experience serving thousands of customers, here are some excellent choices for beginners:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #fecaca;">
            <img src="/images/usha_wonder_stich.jpg" alt="Usha Wonder Stitch" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #991b1b;">Usha Wonder Stitch</h4>
            <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 12px;">Perfect for basic sewing with 21 stitches and easy-to-use features.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px;">
              <p style="font-size: 12px; color: #991b1b; margin: 0;"><strong>Price:</strong> Starting from ₹8,999</p>
            </div>
          </div>
          <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #fecaca;">
            <img src="/images/usha_stich_queen.jpg" alt="Usha Stitch Queen" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #991b1b;">Usha Stitch Queen</h4>
            <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 12px;">Advanced features with 50+ stitches for growing skills.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px;">
              <p style="font-size: 12px; color: #991b1b; margin: 0;"><strong>Price:</strong> Starting from ₹12,999</p>
            </div>
          </div>
        </div>
        
        <img src="/images/usha_marvella.jpg" alt="Professional Sewing Machine Setup" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <p>Ready to find the perfect machine? <a href="/#products" style="color: #dc2626; font-weight: 600;">Browse our curated selection of beginner-friendly models.</a></p>
      `
    },
    {
      id: '5-signs-your-sewing-machine-needs-service',
      title: '5 Signs Your Sewing Machine Needs a Service',
      category: 'Maintenance',
      date: 'October 22, 2024',
      image: '/images/servo_motor.jpg',
      excerpt: 'Is your machine skipping stitches or making strange noises? It might be time for a professional check-up. Here are 5 common signs...',
      content: `
        <h2>Don't wait for a breakdown. Here are the signs your machine needs a tune-up.</h2>
        <p>Regular maintenance is the key to keeping your sewing machine running smoothly for years. Just like a car needs regular service, your sewing machine benefits from professional attention to prevent costly repairs and ensure optimal performance.</p>
        
        <img src="/images/jack_f5.jpg" alt="Professional Sewing Machine Service and Maintenance" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>The Telltale Signs</h3>
        <ol>
            <li><strong>Skipped Stitches:</strong> This could be a needle issue, but if changing the needle doesn't help, it's time for a professional service. Internal timing issues often cause this problem.</li>
            <li><strong>Unusual Noises:</strong> Grinding, clunking, or squeaking sounds are your machine's way of crying for help. These noises indicate worn parts or misalignment.</li>
            <li><strong>Inconsistent Tension:</strong> If you're constantly adjusting tension with no improvement, the internal mechanism may be off or parts may be worn.</li>
            <li><strong>Fabric Snagging:</strong> This could be caused by a burr on the needle plate or feed dogs that need professional attention.</li>
            <li><strong>It's Been Over a Year:</strong> Like a car, sewing machines benefit from annual service to maintain peak performance.</li>
        </ol>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 12px; border: 1px solid #fbbf24;">
            <img src="/images/jack_a2b.jpg" alt="Industrial Machine Maintenance" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #92400e; margin-bottom: 8px;">Industrial Maintenance</h4>
            <p style="font-size: 14px; color: #78350f;">Professional service for heavy-duty industrial machines</p>
          </div>
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 12px; border: 1px solid #fbbf24;">
            <img src="/images/servo_motor.jpg" alt="Servo Motor and Parts" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #92400e; margin-bottom: 8px;">Parts & Components</h4>
            <p style="font-size: 14px; color: #78350f;">Genuine parts replacement and motor service</p>
          </div>
        </div>
        
        <h3>Preventive Maintenance Tips</h3>
        <p>While professional service is essential, you can extend your machine's life with these daily practices:</p>
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 24px; border-radius: 12px; border: 1px solid #0ea5e9; margin: 24px 0;">
          <h4 style="font-weight: 600; color: #0c4a6e; margin-bottom: 16px;">Daily Maintenance Checklist:</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <ul style="font-size: 14px; color: #0c4a6e; line-height: 1.6;">
              <li>• Clean the bobbin area regularly</li>
              <li>• Change needles frequently</li>
              <li>• Use quality thread</li>
            </ul>
            <ul style="font-size: 14px; color: #0c4a6e; line-height: 1.6;">
              <li>• Keep your machine covered when not in use</li>
              <li>• Oil moving parts as recommended</li>
              <li>• Check for loose screws</li>
        </ul>
          </div>
        </div>
        
        <img src="/images/jack_a4f.png" alt="Advanced Machine Features Require Expert Service" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>When to Seek Professional Help</h3>
        <p>Some issues require expert attention. Don't attempt to fix these yourself:</p>
        
        <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #f87171; margin: 24px 0;">
          <h4 style="font-weight: 600; color: #991b1b; margin-bottom: 12px;">⚠️ Professional Service Required:</h4>
          <ul style="font-size: 14px; color: #7f1d1d; line-height: 1.6;">
            <li>• Timing problems</li>
            <li>• Motor issues</li>
            <li>• Electronic malfunctions</li>
            <li>• Major part replacements</li>
            <li>• Circuit board repairs</li>
        </ul>
        </div>
        
        <img src="/images/jack_a5e.jpg" alt="Professional Sewing Machine Technician" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <p>Experiencing any of these issues? <a href="/#services" style="color: #dc2626; font-weight: 600;">Schedule a professional service with our expert technicians.</a></p>
      `
    },
    {
      id: 'comparing-top-3-jack-industrial-machines',
      title: 'Comparing the Top 3 JACK Industrial Machines for 2024',
      category: 'Product Review',
      date: 'October 18, 2024',
      image: '/images/jack_f53.png',
      excerpt: 'We take a deep dive into the features, performance, and value of the top 3 industrial machines from JACK to help you decide.',
      content: `
        <h2>Which JACK machine is right for your business? We compare the F5, A2B, and A4F.</h2>
        <p>JACK has established itself as a leading name in industrial sewing, known for reliability, innovation, and performance. But with multiple models available, choosing the right one for your specific needs can be challenging. Let's break down the key differences between their top three models.</p>
        
        <img src="/images/jack_f53.png" alt="JACK F5 Industrial Sewing Machine - The Workhorse" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>JACK F5: The Workhorse</h3>
        <p>The JACK F5 is the foundation of industrial sewing. This reliable, no-frills high-speed lockstitch machine is perfect for general use and heavy-duty applications.</p>
        
        <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #f87171; margin: 24px 0;">
          <h4 style="font-weight: 600; color: #991b1b; margin-bottom: 12px;">💰 Price: ₹22,999</h4>
          <h4 style="font-weight: 600; margin-bottom: 8px;">Key Features:</h4>
          <ul style="font-size: 14px; color: #7f1d1d; line-height: 1.6;">
            <li>• High-speed performance (5,000 SPM)</li>
            <li>• Energy-saving direct-drive motor</li>
            <li>• Manual thread trimmer</li>
            <li>• Perfect for denim, canvas, and heavy fabrics</li>
            <li>• Automatic lubrication system</li>
          </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
          <img src="/images/jack_f5.jpg" alt="JACK F5 Front View" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
          <img src="/images/jackf5_2.jpg" alt="JACK F5 Side View" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <img src="/images/jack_a2b.jpg" alt="JACK A2B with Automatic Thread Trimmer" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>JACK A2B: The Smart Choice</h3>
        <p>The A2B builds on the F5's reliability while adding the convenience of an automatic thread trimmer, significantly increasing efficiency and reducing production time.</p>
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 12px; border: 1px solid #0ea5e9; margin: 24px 0;">
          <h4 style="font-weight: 600; color: #0c4a6e; margin-bottom: 12px;">💰 Price: ₹24,999</h4>
          <h4 style="font-weight: 600; margin-bottom: 8px;">Key Features:</h4>
          <ul style="font-size: 14px; color: #0c4a6e; line-height: 1.6;">
            <li>• Automatic thread trimmer</li>
            <li>• High-speed performance (5,000 SPM)</li>
            <li>• 71% energy savings</li>
            <li>• Integrated control panel</li>
            <li>• Safety features with alarms</li>
          </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
          <img src="/images/jack_a2b2.jpg" alt="JACK A2B Control Panel" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
          <img src="/images/jacka2b3.jpg" alt="JACK A2B Thread Trimmer" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <img src="/images/jack_a4f.png" alt="JACK A4F Advanced Features" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>JACK A4F: The Automated Powerhouse</h3>
        <p>The A4F represents the pinnacle of JACK's innovation, featuring voice commands, automatic presser foot lifter, and other smart functions for maximum productivity.</p>
        
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; border: 1px solid #22c55e; margin: 24px 0;">
          <h4 style="font-weight: 600; color: #166534; margin-bottom: 12px;">💰 Price: ₹32,500</h4>
          <h4 style="font-weight: 600; margin-bottom: 8px;">Key Features:</h4>
          <ul style="font-size: 14px; color: #166534; line-height: 1.6;">
            <li>• Voice command system</li>
            <li>• Digital presser foot control</li>
            <li>• Automatic thread trimmer</li>
            <li>• Ornamental stitch patterns</li>
            <li>• USB connectivity</li>
          </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
          <img src="/images/jack_a4f2.jpg" alt="JACK A4F Digital Display" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
          <img src="/images/jack_a4f3.jpg" alt="JACK A4F Advanced Controls" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <h3>Making Your Decision</h3>
        <p>Each machine serves different needs and budgets:</p>
        
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 24px; border-radius: 12px; border: 1px solid #64748b; margin: 24px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
            <div style="text-align: center;">
              <h4 style="font-weight: 600; color: #475569; margin-bottom: 8px;">Choose F5 if:</h4>
              <p style="font-size: 14px; color: #64748b;">You need reliability and don't require automation</p>
            </div>
            <div style="text-align: center;">
              <h4 style="font-weight: 600; color: #475569; margin-bottom: 8px;">Choose A2B if:</h4>
              <p style="font-size: 14px; color: #64748b;">You want efficiency improvements without breaking the bank</p>
            </div>
            <div style="text-align: center;">
              <h4 style="font-weight: 600; color: #475569; margin-bottom: 8px;">Choose A4F if:</h4>
              <p style="font-size: 14px; color: #64748b;">You need maximum automation and productivity</p>
            </div>
          </div>
        </div>
        
        <img src="/images/jack_e4s.png" alt="JACK E4S - Another Great Option" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <p>To find the perfect fit for your production line, <a href="/#contact" style="color: #dc2626; font-weight: 600;">get a personalized consultation from our experts.</a></p>
      `
    },
    {
      id: 'usha-sewing-machines-complete-guide',
      title: 'Complete Guide to Usha Sewing Machines: Which Model is Right for You?',
      category: 'Product Guide',
      date: 'October 15, 2024',
      image: '/images/usha_marvella.jpg',
      excerpt: 'Usha offers a wide range of sewing machines for every skill level. From basic models to advanced computerized systems, find your perfect match.',
      content: `
        <h2>Discover the perfect Usha sewing machine for your needs and skill level.</h2>
        <p>Usha has been a trusted name in sewing machines for decades, offering reliable, feature-rich machines for sewers of all levels. Whether you're a complete beginner or an experienced seamstress, there's a Usha machine designed specifically for you.</p>
        
        <img src="/images/usha_marvella.jpg" alt="Usha Marvella Premium Sewing Machine" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>Beginner-Friendly Models</h3>
        <p>If you're just starting your sewing journey, these models provide the perfect foundation:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #f87171;">
            <img src="/images/usha_wonder_stich.jpg" alt="Usha Wonder Stitch" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #991b1b;">Usha Wonder Stitch</h4>
            <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 12px;">Perfect entry-level machine with 21 stitches and easy operation.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #991b1b; margin: 0;"><strong>Price:</strong> ₹8,999</p>
            </div>
            <ul style="font-size: 12px; color: #7f1d1d; line-height: 1.4;">
              <li>• 21 built-in stitches</li>
              <li>• Drop-in bobbin</li>
              <li>• LED light</li>
              <li>• Free arm capability</li>
            </ul>
          </div>
          <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; border: 1px solid #f87171;">
            <img src="/images/usha_stich_magic.jpg" alt="Usha Stitch Magic" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #991b1b;">Usha Stitch Magic</h4>
            <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 12px;">Advanced beginner model with 50+ stitches and decorative options.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #991b1b; margin: 0;"><strong>Price:</strong> ₹11,999</p>
            </div>
            <ul style="font-size: 12px; color: #7f1d1d; line-height: 1.4;">
              <li>• 50+ built-in stitches</li>
              <li>• Automatic buttonhole</li>
              <li>• Speed control</li>
              <li>• Multiple presser feet</li>
            </ul>
          </div>
        </div>
        
        <img src="/images/usha_excella_dlx.jpg" alt="Usha Excella DLX Computerized Machine" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <h3>Intermediate Models</h3>
        <p>For sewers who have mastered the basics and want more advanced features:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 12px; border: 1px solid #0ea5e9;">
            <img src="/images/usha_stich_queen.jpg" alt="Usha Stitch Queen" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #0c4a6e;">Usha Stitch Queen</h4>
            <p style="font-size: 14px; color: #0c4a6e; margin-bottom: 12px;">Professional features for serious home sewers.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #0c4a6e; margin: 0;"><strong>Price:</strong> ₹14,999</p>
            </div>
            <ul style="font-size: 12px; color: #0c4a6e; line-height: 1.4;">
              <li>• 100+ built-in stitches</li>
              <li>• Computerized controls</li>
              <li>• Memory function</li>
              <li>• Advanced buttonholes</li>
            </ul>
          </div>
          <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 12px; border: 1px solid #0ea5e9;">
            <img src="/images/usha_dream_stich.jpg" alt="Usha Dream Stitch" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #0c4a6e;">Usha Dream Stitch</h4>
            <p style="font-size: 14px; color: #0c4a6e; margin-bottom: 12px;">Versatile machine for quilting and embroidery.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #0c4a6e; margin: 0;"><strong>Price:</strong> ₹16,999</p>
            </div>
            <ul style="font-size: 12px; color: #0c4a6e; line-height: 1.4;">
              <li>• Quilting features</li>
              <li>• Large work area</li>
              <li>• Specialty stitches</li>
              <li>• Drop feed system</li>
            </ul>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
          <img src="/images/usha_marvella2.jpg" alt="Usha Marvella Features" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
          <img src="/images/usha_marvella3.jpg" alt="Usha Marvella Controls" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <h3>Advanced & Professional Models</h3>
        <p>For experienced sewers and professionals who demand the best:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
          <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; border: 1px solid #22c55e;">
            <img src="/images/usha_design_master.jpg" alt="Usha Design Master" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #166534;">Usha Design Master</h4>
            <p style="font-size: 14px; color: #166534; margin-bottom: 12px;">Ultimate computerized machine with embroidery capabilities.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #166534; margin: 0;"><strong>Price:</strong> ₹24,999</p>
            </div>
            <ul style="font-size: 12px; color: #166534; line-height: 1.4;">
              <li>• 200+ built-in stitches</li>
              <li>• Embroidery functions</li>
              <li>• Touch screen display</li>
              <li>• USB connectivity</li>
            </ul>
          </div>
          <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; border: 1px solid #22c55e;">
            <img src="/images/usha_wonder_stich_plus.jpg" alt="Usha Wonder Stitch Plus" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />
            <h4 style="font-weight: 600; font-size: 18px; color: #166534;">Usha Wonder Stitch Plus</h4>
            <p style="font-size: 14px; color: #166534; margin-bottom: 12px;">Enhanced version with additional features and accessories.</p>
            <div style="background: rgba(255,255,255,0.7); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; color: #166534; margin: 0;"><strong>Price:</strong> ₹10,999</p>
            </div>
            <ul style="font-size: 12px; color: #166534; line-height: 1.4;">
              <li>• 25 built-in stitches</li>
              <li>• Automatic needle threader</li>
              <li>• Top drop-in bobbin</li>
              <li>• Extended table</li>
            </ul>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
          <img src="/images/usha_marvella4.jpg" alt="Usha Marvella Premium Features" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
          <img src="/images/usha_marvella5.jpg" alt="Usha Marvella Professional Setup" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <h3>Choosing Your Perfect Usha Machine</h3>
        <p>Consider these factors when making your decision:</p>
        
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 24px; border-radius: 12px; border: 1px solid #64748b; margin: 24px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h4 style="font-weight: 600; color: #475569; margin-bottom: 12px;">Factors to Consider:</h4>
              <ul style="font-size: 14px; color: #64748b; line-height: 1.6;">
                <li>• <strong>Skill Level:</strong> Match the machine's complexity to your experience</li>
                <li>• <strong>Project Types:</strong> Consider what you'll be sewing most often</li>
                <li>• <strong>Budget:</strong> Usha offers options for every price range</li>
                <li>• <strong>Space:</strong> Ensure you have room for your chosen model</li>
              </ul>
            </div>
            <div>
              <h4 style="font-weight: 600; color: #475569; margin-bottom: 12px;">Why Choose Usha?</h4>
              <ul style="font-size: 14px; color: #64748b; line-height: 1.6;">
                <li>• Reliability and durability</li>
                <li>• Excellent customer support</li>
                <li>• Wide network of service centers</li>
                <li>• Comprehensive warranty coverage</li>
        </ul>
            </div>
          </div>
        </div>
        
        <img src="/images/usha_550e.jpg" alt="Usha 550E Compact Model" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 32px 0;" />
        
        <p>Ready to find your perfect Usha sewing machine? <a href="/#products" style="color: #dc2626; font-weight: 600;">Browse our complete collection and get expert advice from our team.</a></p>
      `
    }
  ]; 