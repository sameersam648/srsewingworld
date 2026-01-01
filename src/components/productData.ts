export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    image: string;
    images?: string[];
    features: string[];
    category: string;
    specifications?: string[];
    accessories?: string[];
    useCases?: string[];
    warranty?: string[];
  }
  
  export const productData: Product[] = [
    // Industrial Machines
    {
      id: 1,
      name: "JACK F5",
      description: "An energy‑saving, direct‑drive, single‑needle industrial lockstitch sewing machine designed for light to heavy fabrics. It includes advanced features like digital speed control, automatic lubrication, LED lighting, thread trimmer, needle-position control, built-in bobbin winder, and over‑voltage protection. Comes as a full package with table, stand, oil pan, parts kit, and heavy-duty accessories.\n\nPrice Range: ₹30,000–₹35,000 (approx. ₹24,500–₹31,000 in Indian market, online deals ₹22,999–₹28,999)",
      price: 30000,
      salePrice: 22999,
      image: '/images/jack_f5.jpg',
      images: [
        '/images/jack_f5.jpg',
        '/images/jackf5_2.jpg',
        '/images/jack_f53.png',
        '/images/jack_f54.jpg'
      ],
      features: [
        "Energy‑saving direct‑drive motor: Integrated, compact, quiet, vibration‑free, reduces power consumption by up to 70% vs clutch motors",
        "Adjustable speed control: +/– keys with real‑time digital display, up to 5,000 spm",
        "Automatic lubrication: Oil pan with recirculating pump and oil-level indicator",
        "Needle-position control: Stop position at top or bottom after sewing",
        "Built-in thread trimmer: Manual blade to cut thread at seam end",
        "Integrated bobbin winder: Wind bobbin while sewing",
        "LED lighting: Adjustable 3-level illumination",
        "Voltage protection: Safeguard against unstable current",
        "Stitch‑to‑stitch key: For precision work",
        "Heavy-duty adaptability: Handles light to heavy materials; 'H' variant for very heavy work"
      ],
      category: "Industrial Machines",
      specifications: [
        "Needle system: DB×1 (size 11–18) – or DPX5 for 'H' version (18–21)",
        "Max stitch length: 5 mm (H model up to 7 mm)",
        "Presser foot lift: 5 mm (hand), 13 mm (foot pedal)",
        "Speed: Up to 5,000 spm",
        "Dimensions (Shipping): ~635 × 245 × 550 mm",
        "Weight: 31.5 kg net / 38.2 kg gross"
      ],
      accessories: [
        "Heavy-duty table & stand on wheels",
        "Oil pan with pump & level indicator",
        "Tool kit (screwdrivers, parts)",
        "Spare bobbins, needles, thread stand",
        "Instruction manual & parts list included"
      ],
      useCases: [
        "High-volume garment manufacturing (shirts, pants, dresses, uniforms)",
        "Textile and fabric processing industries (cotton, polyester, wool)",
        "Upholstery and furniture manufacturing (sofas, chairs, cushions)",
        "Leather goods and bag making (handbags, wallets, belts)",
        "Automotive interior and seat manufacturing (car seats, dashboards)",
        "Home decor and curtain production (curtains, bedspreads, pillows)",
        "Heavy-duty applications with 'H' model (canvas, denim, multiple layers)",
        "Professional tailoring and alteration shops (suits, formal wear)",
        "Industrial workshops requiring energy efficiency and precision",
        "Manufacturing facilities needing high-speed production (up to 5,000 SPM)"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 2,
      name: "JACK A2B",
      description: "A next‑generation direct‑drive industrial lockstitch sewing machine featuring automatic thread trimming and manual bartack lever, built for versatility on light to heavy fabrics. It integrates the servo motor and control box into the head, delivering energy savings, automatic lubrication, LED lighting, safety alarms, and high‑voltage protection. Supplied as a complete unit with table, stand, accessories, and parts kit.\n\nPrice Range: ₹31,800–₹34,000 (₹24,000–₹32,000 online deals in India), ₹22,500–₹24,500 (supplier quotes in Mumbai/Kolkata)",
      price: 31800,
      salePrice: 24999,
      image: '/images/jack_a2b.jpg',
      images: [
        '/images/jack_a2b.jpg',
        '/images/jack_a2b2.jpg',
        '/images/jacka2b3.jpg',
        '/images/jacka2b4.jpg',
        '/images/jacka2b5.jpg'
      ],
      features: [
        "Automatic thread trimmer: Cuts thread via heel pedal, reducing tail from ~7 cm to ~4 cm and boosting productivity by ~30%",
        "Eco‑servo direct‑drive motor: Integrated into the head for quiet, efficient operation—~71% less power (~446 kWh/yr saved)",
        "Integrated control panel: Quick keys for functions like auto‑cut, needle‑up/down, stitch‑to‑stitch precision",
        "Automatic lubrication: Recirculating pump with oil‑glass indicator",
        "Needle‑position control & stitch‑to‑stitch button: Enables precise pivoting and seam starts/stops",
        "LED lighting: Adjustable 3‑level light to reduce eye strain",
        "Safety features: Anti‑overturning alarm and voltage protector for operator and machine safety",
        "Bobbin winder: Built‑in, allowing sequential bobbin winding during operation"
      ],
      category: "Industrial Machines",
      specifications: [
        "Needle system: DB×1 (#11–18); CH model uses DB×5 (#18–21)",
        "Max stitch length: 5 mm",
        "Presser foot lift: 5 mm (hand), 13 mm (pedal)",
        "Sewing speed: Up to 5,000 spm",
        "Max fabric thickness: ~10 mm",
        "Oil lubrication: Fully automatic",
        "Power consumption: 750 W",
        "Energy-saving: ~71% less than clutch motors",
        "Safety systems: Overturning alarm, voltage protection",
        "Size: ~645 × 248 × 550 mm",
        "Weight: 30 kg net / 36.5 kg gross"
      ],
      accessories: [
        "Factory‑assembled heavy‑duty table & stand",
        "Oil pan with pump & level indicator",
        "Tool kit, bobbins, thread stand & parts manual",
        "Complete instructions and parts list in the kit"
      ],
      useCases: [
        "Garment manufacturing facilities (dresses, shirts, pants, jackets)",
        "Upholstery and furniture manufacturing (sofas, chairs, cushions)",
        "Denim and heavy fabric processing (jeans, workwear, canvas)",
        "Bag making and leather goods production (handbags, backpacks, wallets)",
        "General industrial sewing applications (uniforms, workwear)",
        "Workshops looking to optimize productivity and energy use (71% energy savings)",
        "Light to heavy fabric handling up to 10mm thickness",
        "Professional tailoring and alteration services (suits, formal wear)",
        "High-speed production environments (up to 5,000 SPM)",
        "Facilities requiring automatic thread trimming for efficiency"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 3,
      name: "JACK A4F",
      description: "A computerized lockstitch machine with digital presser foot, digital stitch length, automatic thread trimmer, digital bartacking, and short thread trimming. Features a detachable oil pan, voice guide, and high-precision overlap. Suitable for light to heavy fabrics and offers ornamental stitch patterns.",
      price: 44500,
      salePrice: 32500,
      image: '/images/jack_a4f.png',
      images: [
        '/images/jack_a4f.png',
        '/images/jack_a4f2.jpg',
        '/images/jack_a4f3.jpg'
      ],
      features: [
        "Digital presser foot and stitch length adjustment (stepper motor)",
        "Automatic thread trimmer and digital bartack",
        "Short thread trimming (no need to trim manually)",
        "Voice guide for operation and troubleshooting",
        "High-precision overlap and silent reverse sewing",
        "Ornamental and variable stitch patterns",
        "Lockable stitch length adjustment",
        "Self-oiling, semi-dry head, oil feeding reminder",
        "USB port for charging and software upgrades"
      ],
      category: "Industrial Machines",
      specifications: [
        "Needle system: DBx1 (#11–18)",
        "Max stitch length: 5 mm",
        "Presser foot lift: 5 mm (hand), 13 mm (knee)",
        "Max speed: 5,000 SPM",
        "Weight: 41–47 kg (net/gross)",
        "Volume: 695 x 295 x 550 mm"
      ],
      accessories: [
        "Needles, bobbins, oil, manual, soft cover, spanner, screwdriver",
        "Table, stand, thread stand, integrated direct drive motor"
      ],
      useCases: [
        "High-volume garment manufacturing (dresses, shirts, pants, uniforms)",
        "Textile and fabric processing industries (cotton, polyester, wool)",
        "Home decor and curtain manufacturing (curtains, bedspreads, cushions)",
        "Light to heavy fabric processing (silk to canvas)",
        "Cotton, leather, and synthetic fabric handling",
        "Professional sewing workshops and factories",
        "Custom garment and textile production with ornamental stitches",
        "Industrial sewing applications requiring precision and digital control",
        "Facilities needing computerized stitch patterns and voice guidance",
        "Workshops requiring high-precision overlap and silent operation"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 4,
      name: "JACK A5E",
      description: "A fully automatic lockstitch machine with artificial intelligence chip (AMH) for real-time fabric adaptation. Features a powerful direct drive motor, digital controls, automatic thread trimmer, digital presser foot lifter, and large working space. Sealed oil pan for clean operation.",
      price: 41000,
      salePrice: 35500,
      image: '/images/jack_a5e.jpg',
      images: [
        '/images/jack_a5e.jpg',
        '/images/jack_a5e2.jpg',
        '/images/jack_a5e3.jpg',
        '/images/jack_a5e4.jpg',
        '/images/jack_a5e5.jpeg'
      ],
      features: [
        "Artificial intelligence chip for auto fabric adaptation (AMH)",
        "Ultra-powerful direct drive motor (8.4Nm torque)",
        "Digital presser foot lifter (13 levels)",
        "Automatic thread trimmer and digital bartack",
        "Digital stitch length and voice guide",
        "Large 305mm x 130mm working space",
        "Sealed oil pan, dust-resistant",
        "Pattern sewing and ornamental stitches",
        "USB port for upgrades and charging"
      ],
      category: "Industrial Machines",
      specifications: [
        "Needle system: DBx1 (#11–18)",
        "Max stitch length: 5 mm",
        "Presser foot lift: 1–13 mm",
        "Max speed: 5,000 SPM",
        "Operating space: 305 x 130 mm",
        "Weight: 41–47 kg (net/gross)",
        "Volume: 690 x 295 x 550 mm"
      ],
      accessories: [
        "Table with lockable casters, twin thread stand, bobbins, needles, tools, manual"
      ],
      useCases: [
        "Light, heavy, and elastic fabric processing (silk to canvas)",
        "Garment manufacturing and production (dresses, shirts, pants, jackets)",
        "Upholstery and furniture manufacturing (sofas, chairs, cushions)",
        "Denim and heavy fabric handling (jeans, workwear, canvas)",
        "General industrial sewing applications (uniforms, workwear)",
        "Professional tailoring and alteration services (suits, formal wear)",
        "Custom garment and textile production with AI fabric adaptation",
        "Workshops requiring versatile fabric handling with large working space",
        "Facilities needing artificial intelligence for real-time fabric adaptation",
        "High-speed production environments (up to 5,000 SPM) with sealed oil pan"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 5,
      name: "JACK A4B",
      description: "A digitalized lockstitch machine with digital presser foot, digital stitch length, automatic thread trimmer, and digital bartack. Features ornamental stitch patterns, silent operation, and high-precision overlap. Suitable for light to heavy fabrics.",
      price: 30000,
      salePrice: 23999,
      image: '/images/jack_a4b.jpg',
      images: [
        '/images/jack_a4b.jpg',
        '/images/jack_a4b2.jpg'
      ],
      features: [
        "Digital presser foot and stitch length adjustment (stepper motor)",
        "Automatic thread trimmer and digital bartack",
        "Short thread trimming, ornamental stitch patterns",
        "Silent and comfortable operation",
        "Lockable stitch length adjustment",
        "Self-oiling, semi-dry head, oil feeding reminder"
      ],
      category: "Industrial Machines",
      specifications: [
        "Needle system: DBx1 (#11–18)",
        "Max stitch length: 5–7 mm",
        "Presser foot lift: 5–13 mm",
        "Max speed: 5,000 SPM"
      ],
      accessories: [
        "Table, stand, thread stand, needles, bobbins, oil, manual, tools"
      ],
      useCases: [
        "Large-scale garment and textile production (dresses, shirts, pants, uniforms)",
        "Light to heavy fabric processing (silk to canvas)",
        "Professional sewing workshops and factories",
        "Custom garment manufacturing with digital controls",
        "Textile and fabric processing industries (cotton, polyester, wool)",
        "Industrial sewing applications requiring digital precision",
        "High-volume production environments (up to 5,000 SPM)",
        "Versatile fabric handling requirements with ornamental stitches",
        "Facilities needing computerized stitch patterns and silent operation",
        "Workshops requiring digital presser foot and stitch length control"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 6,
      name: "JACK E4S",
      description: "A high-speed direct drive overlock machine with L/M/H feed selector for light, medium, or heavy fabrics. Features energy-saving motor, advanced oil system, quick response, and intelligent panel for easy operation. Clean seams and stable, durable construction.",
      price: 31999,
      salePrice: 25999,
      image: '/images/jack_e4s.png',
      images: [
        '/images/jack_e4s.png',
        '/images/jack_e4s2.jpg',
        '/images/jack_e4s3.jpg'
      ],
      features: [
        "L/M/H selector for feed dog inclination (patented)",
        "Integrated energy-saving direct drive motor",
        "Advanced oil system to prevent leaks",
        "Quick response and high productivity",
        "Intelligent panel for reset and LED adjustment",
        "Single shaft motor for stability and durability",
        "Integrated LED lighting"
      ],
      category: "Industrial Machines",
      specifications: [
        "Model: JK-E4S-4-M03/333",
        "Functions: Plain seam, mock safety stitch",
        "Needle system: DCx27 Size #11–14",
        "Number of needles: 2–3",
        "Number of threads: 4–6",
        "Stitch width: 4mm x 4.6mm",
        "Stitch length: 0.8–4.6 mm",
        "Differential ratio: 0.7–2 mm",
        "Presser foot lift: 5.5 mm",
        "Max speed: 5,500 SPM"
      ],
      accessories: [
        "Table, stand, thread stand, needles, bobbins, oil, manual, tools"
      ],
      useCases: [
        "Blouses, shirts, and uniform manufacturing (school uniforms, corporate wear)",
        "Overalls and workwear production (industrial workwear, safety gear)",
        "Lingerie and intimate apparel (underwear, sleepwear, swimwear)",
        "Light to medium-weight fabric processing (cotton, silk, polyester)",
        "Garment finishing and edge treatment (hemming, serging, overlocking)",
        "Professional garment manufacturing with clean seam finishes",
        "Textile and fabric processing industries requiring mock safety stitches",
        "Industrial sewing applications requiring clean seams and edge finishing",
        "High-speed production environments (up to 5,500 SPM)",
        "Facilities needing L/M/H feed selector for different fabric types"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
  
    // Other Sewing Machines
    {
      id: 7,
      name: "Usha TA1",
      description: "A high-speed, semi-industrial manual sewing machine designed for heavy-duty use. Capable of sewing up to 16 layers of denim, it features a rotary hook, imported presser foot, improved thread control, and a robust square body. Suitable for both home and industrial applications, it offers a maximum speed of 1800 SPM and a stitch length of 4.2 mm.",
      price: 14000,
      salePrice: 11500,
      image: "/images/usha_ta1.png",
      images: [
        "/images/usha_ta1.png"
      ],
      features: [
        "Strong rotary hook for better stitching",
        "Special presser foot for smooth sewing on thick and multiple layers",
        "Improved thread control for neat and even stitches",
        "Can sew up to 16 layers of denim",
        "Easy-to-use reverse stitch lever",
        "Fast stitching speed of 1800 SPM",
        "Special feed system for better fabric movement",
        "Durable parts for long-lasting performance",
        "Needle plate designed for smooth sewing on heavy fabrics"
      ],
      category: "Other Sewing Machines",
      specifications: [
        "Body: Square",
        "Maximum speed: 1800 SPM",
        "Stitch length: 4.2 mm",
        "Hook mechanism: Rotary hook type",
        "Drive/Motion: Gear drive",
        "Color: Black"
      ],
      accessories: [
        "Imported presser foot",
        "Imported feed dog",
        "Needle plate with eye slot",
        "Tool kit"
      ],
      useCases: [
        "Heavy-duty sewing for home and industrial use",
        "Suitable for light to thick fabrics, including denim and canvas",
        "Ideal for small businesses and advanced home users"
      ],
      warranty: [
        "1-year service warranty"
      ]
    },
    {
      id: 8,
      name: "Usha Design Master",
      description: "A versatile domestic-industrial sewing machine with a square arm body and gear drive. Capable of both straight and zig zag stitching, it is ideal for simple embroidery, picot, darning, and shade work on all types of fabric. Features a full rotary hook, high speed up to 2000 SPM, and supports single and twin needle operation. Suitable for home and small business use.",
      price: 13000,
      salePrice: 11000,
      image: "/images/usha_design_master.jpg",
      images: [
        "/images/usha_design_master.jpg"
      ],
      features: [
        "Square arm body, black color, gear drive",
        "Maximum stitch width: 4 mm",
        "Straight and zig zag stitching",
        "Simple embroidery, picot, darning, shade work",
        "Full rotary hook for smooth operation",
        "High speed: up to 2000 SPM",
        "Compatible with single and twin needle operation",
        "Manual (foot treadle) and motorized drive options"
      ],
      category: "Other Sewing Machines",
      specifications: [
        "Body: Square arm",
        "Maximum speed: 2000 SPM",
        "Stitch width: 4 mm",
        "Hook mechanism: Full rotary hook",
        "Drive/Motion: Gear drive",
        "Color: Black"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Tool kit",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and small business use",
        "Embroidery, picot, darning, shade work on silk, cotton, wool, rayon, and more",
        "Versatile for both straight and zig zag stitching"
      ],
      warranty: [
        "1-year service warranty"
      ]
    },
  
    // Domestic Sewing Machines
    {
      id: 9,
      name: "Allure Dlx",
      description: "A feature-rich automatic zig-zag sewing machine designed for versatility and ease of use. Offers 13 built-in stitches, 21 stitch functions, automatic needle threading, LED sewing light, triple strength stitch, and a free arm for circular stitching. Ideal for home use and creative projects.",
      price: 20000,
      salePrice: 15999,
      image: "/images/usha_janome-removebg-preview.png",
      images: [
        "/images/usha_janome-removebg-preview.png",
        '/images/allure_dlx2.jpg',
        '/images/allure_dlx3.jpg',
        '/images/allure_dlx4.jpg',
        '/images/allure_dlx5.jpg'
      ],
      features: [
        "13 built-in stitches including buttonhole",
        "21 stitch functions (stretch, button fixing, rolled hemming, smocking, blind stitch, zip fixing)",
        "Automatic needle threading",
        "Triple strength stitch",
        "Automatic feed drop for embroidery",
        "Face-plated thread cutter",
        "LED sewing light",
        "Free arm for circular stitching",
        "Auto tripping bobbin system",
        "Dial type stitch selector",
        "Maximum zigzag width: 5mm",
        "Maximum stitch length: 4mm",
        "Sewing speed: 860 SPM"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Automatic zig-zag",
        "Maximum speed: 860 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 6 kg",
        "Dimensions: 41 x 28 x 21 cm",
        "Warranty: 2 years"
      ],
      accessories: [
        "Zig zag foot",
        "Automatic buttonhole foot",
        "Zipper foot",
        "Blind hem foot",
        "Rolled hem foot",
        "3 bobbins",
        "3 single needles",
        "Seam ripper",
        "Screwdriver",
        "2 threads",
        "Instruction manual",
        "Warranty card",
        "Soft machine cover"
      ],
      useCases: [
        "Home sewing and creative projects (dresses, skirts, tops, home decor)",
        "Embroidery and decorative stitching (applique, monogramming, embellishments)",
        "Quilting and patchwork projects (bed quilts, wall hangings, table runners)",
        "Smocking and gathering techniques (children's clothing, decorative details)",
        "Hemming and edge finishing (pants, skirts, curtains, tablecloths)",
        "Buttonhole and button attachment (shirts, blouses, jackets, coats)",
        "Ideal for beginners and experienced sewists (13 built-in stitches)",
        "Small business and hobby sewing (21 stitch functions)",
        "Free arm sewing for circular projects (cuffs, sleeves, collars)",
        "LED sewing light for precise work in any lighting condition"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 10,
      name: "Usha Marvella",
      description: "A compact and portable automatic zig-zag sewing machine with 7 built-in stitches, including buttonhole. Features a single dial for pattern selection, free arm for circular stitching, and a powerful motor suitable for light to heavy fabrics. Ideal for home use, beginners, and creative projects.",
      price: 15000,
      salePrice: 10799,
      image: "/images/usha_marvella.jpg",
      images: [
        "/images/usha_marvella.jpg",
        '/images/usha_marvella2.jpg',
        '/images/usha_marvella3.jpg',
        '/images/usha_marvella4.jpg',
        '/images/usha_marvella5.jpg'
      ],
      features: [
        "7 built-in stitches including buttonhole",
        "Single dial pattern selector",
        "Free arm for circular stitching (cuffs, sleeves)",
        "Compact and portable design",
        "Powerful motor for light to heavy fabrics",
        "Stay-bright LED sewing light",
        "Manual needle threading",
        "Auto tripping bobbin system",
        "4-step buttonhole sewing",
        "Stitch width: 5 mm"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Automatic zig-zag",
        "Number of stitch functions: 14",
        "Maximum speed: 550 SPM",
        "Stitch width: 5 mm",
        "Dimensions: 33.8 x 25.8 x 14.1 cm",
        "Weight: 7 kg",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and creative projects (dresses, skirts, tops, home decor)",
        "Ideal for beginners and hobbyists (7 built-in stitches)",
        "Light to heavy fabric processing (cotton to denim)",
        "Denim and canvas sewing (jeans, bags, upholstery)",
        "Basic garment construction (shirts, pants, dresses, skirts)",
        "Home decoration projects (curtains, cushions, tablecloths)",
        "Small business sewing services (alterations, custom work)",
        "Educational and learning environments (schools, training centers)",
        "Free arm sewing for circular projects (cuffs, sleeves, collars)",
        "Compact and portable design for home and small workshop use"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 11,
      name: "Usha Dream Stich",
      description: "A compact free arm zig-zag sewing machine with 7 built-in stitches, including buttonhole. Features a single dial for pattern selection, auto tripping bobbin system, and a sewing light. Ideal for home use, beginners, and creative projects.",
      price: 15000,
      salePrice: 10699,
      image: "/images/usha_dream_stich.jpg",
      images: [
        "/images/usha_dream_stich.jpg",
        '/images/usha_dreamstich2.jpg',
        '/images/usha_dreamstich3.jpg',
        '/images/usha_dreamstich4.jpg',
        '/images/usha_dreamstich5.jpg'
      ],
      features: [
        "7 built-in stitches including buttonhole",
        "Single dial pattern selector",
        "Compact free arm design",
        "Auto tripping bobbin system",
        "Manual needle threading",
        "Sewing light",
        "4-step buttonhole sewing",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Lightweight and portable"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Free arm zig-zag",
        "Number of built-in stitches: 7",
        "Maximum speed: 550 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 7 kg",
        "Dimensions: '38 x 19 x 29 cm'",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and creative projects (dresses, skirts, tops, home decor)",
        "Ideal for beginners and hobbyists (7 built-in stitches)",
        "Suitable for light to medium fabrics (cotton, silk, polyester)",
        "Basic garment construction (shirts, pants, dresses, skirts)",
        "Home decoration projects (curtains, cushions, tablecloths)",
        "Small business sewing services (alterations, custom work)",
        "Educational and learning environments (schools, training centers)",
        "Free arm sewing for circular projects (cuffs, sleeves, collars)",
        "Compact free arm design for versatile sewing applications",
        "Lightweight and portable design for home and small workshop use"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 12,
      name: "Usha Excella Dlx",
      description: "A computerized automatic zig-zag sewing machine with 13 built-in stitches, 21 stitch applications, automatic needle threading, LED sewing light, and a face plate thread cutter. Features a free arm for circular stitching, auto tripping bobbin system, and a lightweight, portable design. Ideal for home use and creative projects.",
      price: 20500,
      salePrice: 12999,
      image: "/images/usha_excella_dlx.jpg",
      images: [
        "/images/usha_excella_dlx.jpg"
      ],
      features: [
        "13 built-in stitches including buttonhole",
        "21 stitch applications (buttonholing, button fixing, cording, smocking, applique, picot, etc.)",
        "Automatic needle threading",
        "LED sewing light",
        "Face plate thread cutter",
        "Free arm for circular stitching",
        "Auto tripping bobbin system",
        "Triple strength stitch",
        "2 dials for pattern selector and stitch length control",
        "Snap-on presser foot",
        "Lightweight and portable design"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Computerized automatic zig-zag",
        "Number of built-in stitches: 13",
        "Number of stitch applications: 21",
        "Maximum speed: 800–850 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Dimensions: 7.1 x 13.8 x 11.4 cm",
        "Weight: 8 kg",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual",
        "Carrying handle"
      ],
      useCases: [
        "Home sewing and creative projects (dresses, skirts, tops, home decor)",
        "Ideal for beginners and experienced sewists (13 built-in stitches)",
        "Suitable for a wide range of fabrics and applications (cotton to denim)",
        "Embroidery and decorative stitching (applique, monogramming, embellishments)",
        "Quilting and patchwork projects (bed quilts, wall hangings, table runners)",
        "Smocking and gathering techniques (children's clothing, decorative details)",
        "Hemming and edge finishing (pants, skirts, curtains, tablecloths)",
        "Buttonhole and button attachment (shirts, blouses, jackets, coats)",
        "Free arm sewing for circular projects (cuffs, sleeves, collars)",
        "Lightweight and portable design with carrying handle"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 13,
      name: "Usha Wonder Stich",
      description: "A versatile automatic zig-zag sewing machine with 13 built-in stitches, 21 stitch functions, automatic needle threading, triple strength stitch, and drop feed dog for embroidery. Features a free arm for circular stitching, adjustable stitch length and width, and a powerful motor. Ideal for home use, creative projects, and beginners.",
      price: 20500,
      salePrice: 15299,
      image: "/images/usha_wonder_stich.jpg",
      images: [
        "/images/usha_wonder_stich.jpg"
      ],
      features: [
        "13 built-in stitches including buttonhole",
        "21 stitch functions (button fixing, stretch stitching, rolled hemming, blind stitch hemming, zip fixing, smocking, etc.)",
        "Automatic needle threading",
        "Triple strength stitch",
        "Drop feed dog for embroidery",
        "Free arm for circular stitching (cuffs, sleeves)",
        "Adjustable stitch length and width",
        "Auto trip bobbin winder",
        "Thread cutter",
        "Sewing light",
        "One touch reverse stitch",
        "Extra high presser foot lift",
        "Powerful motor for light to heavy fabrics"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Automatic zig-zag",
        "Number of built-in stitches: 13",
        "Number of stitch functions: 21",
        "Maximum speed: 860 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 7–8 kg",
        "Dimensions: 9.1 x 16.9 x 13 cm",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and creative projects (dresses, skirts, tops, home decor)",
        "Ideal for beginners and hobbyists (13 built-in stitches)",
        "Suitable for a wide range of fabrics and applications (cotton to denim)",
        "Embroidery and decorative stitching (applique, monogramming, embellishments)",
        "Quilting and patchwork projects (bed quilts, wall hangings, table runners)",
        "Smocking and gathering techniques (children's clothing, decorative details)",
        "Hemming and edge finishing (pants, skirts, curtains, tablecloths)",
        "Buttonhole and button attachment (shirts, blouses, jackets, coats)",
        "Free arm sewing for circular projects (cuffs, sleeves, collars)",
        "Powerful motor for light to heavy fabrics with drop feed for embroidery"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 14,
      name: "Usha Wonder Stich Plus",
      description: "A premium automatic zig-zag sewing machine with 23 built-in stitches, 36 stitch functions, automatic needle threading, one-step buttonhole, adjustable stitch length and width, and drop feed for embroidery. Features a free arm for circular stitching, built-in light, and a powerful motor. Ideal for home use, creative projects, and advanced users.",
      price: 20500,
      salePrice: 17699,
      image: "/images/usha_wonder_stich_plus.jpg",
      images: [
        "/images/usha_wonder_stich_plus.jpg"
      ],
      features: [
        "23 built-in stitches including decorative, utility, and embroidery",
        "36 stitch functions (button fixing, stretch stitching, rolled hemming, blind stitch hemming, zip fixing, smocking, etc.)",
        "Automatic needle threading",
        "One-step buttonhole",
        "Adjustable stitch length and width",
        "Drop feed dog for embroidery",
        "Free arm for circular stitching (cuffs, sleeves)",
        "Built-in sewing light",
        "Auto trip bobbin winder",
        "Thread cutter",
        "One touch reverse stitch",
        "Extra high presser foot lift",
        "Powerful motor for light to heavy fabrics"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Automatic zig-zag",
        "Number of built-in stitches: 23",
        "Number of stitch functions: 36",
        "Maximum speed: 860 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 7–8 kg",
        "Dimensions: 9.1 x 16.9 x 13 cm",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and creative projects",
        "Ideal for advanced users and hobbyists",
        "Suitable for a wide range of fabrics and applications"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 15,
      name: "Usha Stich Magic",
      description: "A high-performance automatic zig-zag sewing machine with 57 stitch functions, free arm with detachable extension bed, triple strength stitch, and manual thread tension control. Features a dial-type stitch pattern selector, adjustable stitch length, and a powerful motor. Ideal for home use, creative projects, and advanced users.",
      price: 26400,
      salePrice: 20899,
      image: "/images/usha_stich_magic.jpg",
      images: [
        "/images/usha_stich_magic.jpg"
      ],
      features: [
        "57 stitch functions including straight, zigzag, decorative, and embroidery patterns",
        "Free arm with detachable extension bed for circular stitching",
        "Triple strength stitch capability",
        "Manual thread tension control",
        "Dial-type stitch pattern selector",
        "Button fixing, stretch stitching, rolled hemming, satin stitch, zip fixing, smocking",
        "Two dials for pattern and stitch length selection",
        "Sewing speed: 860 SPM",
        "Metal construction for durability",
        "Portable design with carrying handle"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Automatic zig-zag",
        "Number of stitch functions: 57",
        "Maximum speed: 860 SPM",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 10.1 kg",
        "Dimensions: 5.9 x 7.9 x 7.9 cm",
        "Power: 85 watts",
        "Warranty: 2 years"
      ],
      accessories: [
        "Zig zag foot",
        "Blind hem foot",
        "Zipper foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and creative projects",
        "Ideal for advanced users and hobbyists",
        "Suitable for a wide range of fabrics and applications"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
    {
      id: 16,
      name: "Usha Stich Queen",
      description: "A flatbed automatic zig-zag sewing machine with 2 built-in stitches, 9 stitch functions, snap-on presser foot, and single touch reverse stitch. Features auto tripping bobbin winder, open type shuttle, and adjustable stitch length and width. Ideal for home use, basic sewing, and creative projects.",
      price: 15800,
      salePrice: 11299,
      image: "/images/usha_stich_queen.jpg",
      images: [
        "/images/usha_stich_queen.jpg"
      ],
      features: [
        "Flatbed zig-zag machine",
        "2 built-in stitches",
        "9 stitch functions (lace fixing, quilting, rolled hemming, etc.)",
        "Snap-on presser foot",
        "Single touch reverse stitch",
        "Auto tripping bobbin winder",
        "Open type shuttle",
        "2 dials for pattern selector and stitch length control",
        "Maximum zig-zag width: 5 mm",
        "Maximum stitch length: 4 mm",
        "Can be used with or without motor (foot treadle compatible)"
      ],
      category: "Domestic Sewing Machines",
      specifications: [
        "Machine type: Flatbed automatic zig-zag",
        "Number of built-in stitches: 2",
        "Number of stitch functions: 9",
        "Maximum speed: —",
        "Stitch width: 5 mm",
        "Stitch length: 4 mm",
        "Weight: 8 kg",
        "Dimensions: 38.1 x 20.5 x 28.8 cm",
        "Warranty: 2 years"
      ],
      accessories: [
        "Presser foot",
        "Needle set",
        "Bobbin",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual"
      ],
      useCases: [
        "Home sewing and basic projects",
        "Ideal for beginners and hobbyists",
        "Suitable for basic and creative sewing applications"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
  
    // Industrial Sewing Machines (Usha)
    {
      id: 17,
      name: "Usha 450E",
      description: "A fully computerized embroidery machine with a large 7.9\" x 7.9\" embroidery area, 160 built-in designs, 6 monogram fonts, and a full-color touchscreen. Features USB connectivity, automatic thread cutter, adjustable embroidery speed, and advanced editing functions. Ideal for home businesses, boutiques, and creative embroidery projects.",
      price: 120045,
      salePrice: 108240,
      image: "/images/usha_450e2.png",
      images: [
        "/images/usha_450e1.png",
        "/images/usha_450e2.png",
        "/images/usha_45e3.png"
      ],
      features: [
        "Large embroidery area: 7.9\" x 7.9\" (200 x 200 mm)",
        "160 built-in embroidery designs",
        "6 built-in monogramming fonts",
        "Full-color LCD touchscreen (5\")",
        "USB port for importing designs",
        "Automatic thread cutter",
        "Programmable jump thread trimming",
        "Adjustable embroidery speed: 400–860 SPM",
        "On-screen editing: resize, rotate, flip, drag & drop, combine, copy, paste, arc, group, zoom",
        "Top loading full rotary hook bobbin",
        "Bobbin thread sensor",
        "Extra wide table for large projects",
        "Digitizer Jr software included"
      ],
      category: "Industrial Sewing Machines (Usha)",
      specifications: [
        "Machine type: Computerized embroidery",
        "Embroidery area: 7.9\" x 7.9\" (200 x 200 mm)",
        "Built-in designs: 160",
        "Monogramming fonts: 6",
        "Maximum embroidery speed: 860 SPM",
        "USB connectivity: Yes",
        "LCD touchscreen: 5\" full color",
        "Hoops included: 2 (RE28b: 8\" x 11\", SQ20b: 8\" x 8\")",
        "Embroidery format: .jef, .jpx",
        "Weight: —",
        "Warranty: 2 years"
      ],
      accessories: [
        "2 embroidery hoops (RE28b & SQ20b)",
        "Needle set",
        "Bobbins",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual",
        "Digitizer Jr software",
        "Dust cover",
        "Extra wide table"
      ],
      useCases: [
        "Home embroidery businesses",
        "Boutiques and custom embroidery",
        "Personalized gifts and creative projects"
      ],
      warranty: [
        "1-year service warranty",
        "3-years board and PCB warranty"
      ]
    },
    {
      id: 18,
      name: "Usha 550E",
      description: "A high-end computerized embroidery machine with a massive 7.9\" x 14.2\" embroidery area, 180 built-in designs, 6 monogramming fonts, and a full-color touchscreen. Features USB connectivity, automatic thread cutter, advanced editing, and four included hoops. Ideal for professional embroidery, boutiques, and creative businesses.",
      price: 180450,
      salePrice: 147240,
      image: "/images/usha_550e.jpg",
      images: [
        "/images/usha_550e.jpg",
        "/images/usha_550e2.jpg",
        "/images/usha_550e3.jpg"
      ],
      features: [
        "Largest embroidery area: 7.9\" x 14.2\" (200 x 360 mm)",
        "180 built-in embroidery designs",
        "6 built-in monogramming fonts",
        "Full-color LCD touchscreen",
        "USB port for importing designs",
        "Automatic thread cutter and superior needle threader",
        "Programmable jump thread trimming",
        "Adjustable embroidery speed: up to 860 SPM",
        "On-screen editing: resize, rotate, flip, drag & drop, combine, copy, paste, arc, group, zoom",
        "Top loading full rotary hook bobbin",
        "Bobbin thread sensor",
        "Extra wide table for large projects",
        "Artistic Digitizer Jr software included",
        "Four embroidery hoops included"
      ],
      category: "Industrial Sewing Machines (Usha)",
      specifications: [
        "Machine type: Computerized embroidery",
        "Embroidery area: 7.9\" x 14.2\" (200 x 360 mm)",
        "Built-in designs: 180",
        "Monogramming fonts: 6",
        "Maximum embroidery speed: 860 SPM",
        "USB connectivity: Yes",
        "LCD touchscreen: Full color",
        "Hoops included: 4 (RE36b, SQ20b, RE20b, SQ14b)",
        "Embroidery format: .jef, .jef+, .jpx",
        "Weight: —",
        "Warranty: 2 years"
      ],
      accessories: [
        "4 embroidery hoops (RE36b, SQ20b, RE20b, SQ14b)",
        "Needle set",
        "Bobbins",
        "Seam ripper",
        "Screwdriver",
        "Instruction manual",
        "Artistic Digitizer Jr software",
        "Dust cover",
        "Extra wide table"
      ],
      useCases: [
        "Professional embroidery businesses",
        "Boutiques and custom embroidery",
        "Large creative and commercial embroidery projects"
      ],
      warranty: [
        "2-year service warranty"
      ]
    },
  
    // Spares
    {
      id: 19,
      name: "Servo Motor",
      description: "A high-performance, energy-efficient servo motor designed for industrial sewing machines. Provides precise speed control, low noise, and reduced power consumption. Ideal for upgrading or replacing clutch motors in tailoring, garment, and textile workshops.",
      price: 4500,
      salePrice: 2400,
      image: "/images/servo_motor.jpg",
      images: [
        "/images/servo_motor.jpg"
      ],
      features: [
        "High torque and fast acceleration",
        "Energy efficient: up to 70% less power than clutch motors",
        "Low noise and vibration",
        "Precise speed control (200–4500 RPM)",
        "Easy installation and maintenance",
        "Compatible with most industrial sewing machines"
      ],
      category: "Spares",
      specifications: [
        "Power: 550W–750W (varies by model)",
        "Voltage: 220V single phase",
        "Speed range: 200–4500 RPM",
        "Weight: ~5 kg",
        "Mounting: Standard industrial base"
      ],
      accessories: [
        "Mounting hardware",
        "Control box",
        "Speed adjustment pedal",
        "Instruction manual"
      ],
      useCases: [
        "Upgrade for industrial sewing machines",
        "Replacement for clutch motors",
        "Tailoring shops, garment factories, textile workshops"
      ]
    }
  ];