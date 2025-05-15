const products = [
  {
    id: 1,
    name: "Runner Graffiti sneakers",
    description: "Balenciaga's iconic Runner sneakers are inspired by retro track styles from the '90s, as their name suggests. These ones sport the signature panelled mesh upper but are elevated by a graffiti print and distressed detailing at the chunky rubber sole.",
    price: 1330,
    brand: "Balenciaga",
    category: "Shoes",
    images: ["https://balenciaga.dam.kering.com/m/6261d83e31b5fca6/Medium-772774W3RBQ1060_X.jpg?v=4",
      "https://balenciaga.dam.kering.com/m/36819cde8ddc5276/Large-772774W3RBQ1060_F.jpg?v=8",
      "https://balenciaga.dam.kering.com/m/2a9d587a16233676/Large-772774W3RBQ1060_J.jpg?v=5",
      "https://balenciaga.dam.kering.com/m/2c0c843a986d634a/Large-772774W3RBQ1060_I.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/5d2b2c5d4ff01a61/Large-772774W3RBQ1060_L.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/78d8cbf89692b74b/Large-772774W3RBQ1060_D.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/24b541d9112c0f31/Large-772774W3RBQ1060_E.jpg?v=5"
    ]
  },
  {
    id: 2,
    name: "Medium shoulder bag",
    description: "The sophisticated minimalism of the '90s inspires the new Prada Aimée bag. The design evokes the instinctive gesture of holding a bag with its soft silhouette, created for effortless wear on the shoulders or cross-body.",
    price: 2750,
    brand: "Prada",
    category: "Accessories",
    images: ["https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC229/2CYSF0002/1BC229_2CYS_F0002_V_LVM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC229/2CYSF0002/1BC229_2CYS_F0002_V_LVM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC229/2CYSF0002/1BC229_2CYS_F0002_V_LVM_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC229/2CYSF0002/1BC229_2CYS_F0002_V_LVM_SLO.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC229/2CYSF0002/1BC229_2CYS_F0002_V_LVM_MDLA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
    ]
  },
  {
    id: 3,
    name: "Tom Ford",
    description: "Houndstooth-pattern belted coat ",
    price: 2400,
    brand: "Tom Ford",
    category: "Outerwear",
    images: ["https://cdn.media.amplience.net/i/tom_ford/OCT007-FMW027S24_FG750_OS_G?w=1440",
      "https://cdn.media.amplience.net/i/tom_ford/OCT007-FMW027S24_FG750_OS_H?w=1440",
    ]
  },
  {
    id: 4,
    name: "Gradient Sneaker",
    description: "3XL Gradient Sneaker in black, grey and white mesh, polyurethane and polyester",
    price: 1000,
    brand: "Balenciaga",
    category: "Shoes",
    images: ["https://balenciaga.dam.kering.com/m/5427878bf401ded/Medium-734734W3XGM1190_X.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/146c25df8dd1d81f/Large-734734W3XGM1190_F.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/7cdff2d53ae9017d/Large-734734W3XGM1190_J.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/17982b660baf419e/Large-734734W3XGM1190_I.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/19ffeb23b8ec4ecd/Large-734734W3XGM1190_L.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/22c4c9517a23d241/Large-734734W3XGM1190_D.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/6eaa9cb49fc401/Large-734734W3XGM1190_E.jpg?v=2"
    ]
  },
  {
    id: 5,
    name: "4G sweater",
    description: "Long-sleeved sweater in cashmere. Crew neck. Oversized 4G emblem on the front. Ribbed collar, hem and cuffs. Model measures 5.8 Feet and wears a size XS.",
    price: 1100,
    brand: "Givenchy",
    category: "Sweater",
    images: ["https://assets.givenchy.com/m/2d294bfe9a708ecb/High_Resolution_JPG-BW90QY4ZEQ411-02-01.jpg?imwidth=1024",
      "https://assets.givenchy.com/m/2d294bfe9a708ecb/High_Resolution_JPG-BW90QY4ZEQ411-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/51d63c5e0c33dd90/High_Resolution_JPG-BW90QY4ZEQ411-02-03.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/5cae0dd9102669f2/High_Resolution_JPG-BW90QY4ZEQ411-02-04.jpg?imwidth=1500"
    ]
  },
  {
    id: 6,
    name: "Bomber Jacket",
    description: "Moncler x Mercedes-Benz by Nigo Neper Reversible Down Bomber Jacket. Straightforward, yet with a twist, the Moncler x Mercedes-Benz by Nigo Neper down bomber jacket for men is reversible.",
    price: 2050,
    brand: "Moncler",
    category: "Outerwear",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/K14011A00005M5922833_R/dpx6uv/std/768x1152/moncler-x-mercedes-benz-by-nigo-neper-reversible-down-bomber-jacket-men-olive-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K14011A00005M5922833_R/dpx6uv/std/768x1152/moncler-x-mercedes-benz-by-nigo-neper-reversible-down-bomber-jacket-men-olive-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K14011A00005M5922833_E/dpx6uv/std/768x1152/moncler-x-mercedes-benz-by-nigo-neper-reversible-down-bomber-jacket-men-olive-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K14011A00005M5922833_A/dpx6uv/std/768x1152/moncler-x-mercedes-benz-by-nigo-neper-reversible-down-bomber-jacket-men-olive-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K14011A00005M5922833_D/dpx6uv/std/768x1152/moncler-x-mercedes-benz-by-nigo-neper-reversible-down-bomber-jacket-men-olive-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 7,
    name: "Crew-neck sweater",
    description: "This refined, elegant crew-neck sweater is defined by its minimalist design and color contrasts that give it retro charm. The ribbed knit trim and saddle shoulder accentuate the femininity of the garment decorated with the embroidered logo.",
    price: 1390,
    brand: "Prada",
    category: "Sweater",
    images: ["https://www.prada.com/content/dam/pradabkg_products/P/P24/P24I1R/1ZO5F0967/P24I1R_1ZO5_F0967_S_212_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P24/P24I1R/1ZO5F0967/P24I1R_1ZO5_F0967_S_212_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P24/P24I1R/1ZO5F0967/P24I1R_1ZO5_F0967_S_212_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P24/P24I1R/1ZO5F0967/P24I1R_1ZO5_F0967_S_212_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"

    ]
  },
  {
    id: 8,
    name: "Men's Explorer Backpack",
    description: "Explorer Backpack in black grained calfskin. Material: calfskin, polyamide, polyester",
    price: 1500,
    brand: "Balenciaga",
    category: "Accessories",
    images: ["https://balenciaga.dam.kering.com/m/49b4bc14c42fed89/Small-5032212ABND1000_X.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/21a2ee5fdabafafa/Large-5032212ABND1000_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/34cfcd7382a47b29/Large-5032212ABND1000_J.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/14788f95ff0120ea/Large-5032212ABND1000_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/5502b3a1856e94af/Large-5032212ABND1000_E.jpg?v=1"

    ]
  },
  {
    id: 9,
    name: "Silver earring",
    description: "Goth Snake Earring in antique silver recycled brass and aluminum with rhinestones. Material: brass, aluminum, glass",
    price: 400,
    brand: "Balenciaga",
    category: "Accessories",
    images: ["https://balenciaga.dam.kering.com/m/668c885f75184abf/Small-815174TZR4I1407_X.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/510f78069679ad28/Large-815174TZR4I1407_F.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/5fd78b1fee9028ed/Large-815174TZR4I1407_I.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/1149df01344ab7bc/Large-815174TZR4I1407_J.jpg?v=1"

    ]
  },
  {
    id: 10,
    name: "Opyum sandals ",
    description: "Sandals with a CASSANDRE heel and square toe, featuring crisscrossed straps and an adjustable ankle strap.",
    price: 1200,
    brand: "Saint-laurent",
    category: "Shoes",
    images: ["https://saint-laurent.dam.kering.com/m/2235c3f3116ac45c/Medium2-8179729QNBS4415_A.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/2235c3f3116ac45c/Medium2-8179729QNBS4415_A.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/3db16575d08788d7/Medium2-8179729QNBS4415_B.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/45910d74436a6ea2/Medium2-8179729QNBS4415_C.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/eea22663ddaa22f/Medium2-8179729QNBS4415_Y.jpg?v=1"
    ]
  },
  {
    id: 11,
    name: "City backpack",
    description: "backpack made with recycled polyamide, featuring a SAINT LAURENT PARIS debossed front zip pocket, a zip compartment, and padded slot pocket.",
    price: 1150,
    brand: "Saint-laurent",
    category: "Accessories",
    images: ["https://saint-laurent.dam.kering.com/m/294df3738a036f0f/Medium2-534967FAEB91000_A.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/294df3738a036f0f/Medium2-534967FAEB91000_A.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/4044d4e1c67b4a66/Medium2-534967FAEB91000_B.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/7d6edee16143c64b/Medium2-534967FAEB91000_C.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/49cb829af226dab1/Medium2-534967FAEB91000_D.jpg?v=1"

    ]
  },
  {
    id: 12,
    name: "Drill Double coat",
    description: "Drill Double coat. V Gold detail on pockets. Front closure with concealed buttons. Waist belt",
    price: 5050,
    brand: "Valentino",
    category: "Outerwear",
    images: ["https://valentino-cdn.thron.com/delivery/public/image/valentino/3e9fd8fe-7f13-405f-b64d-300d629b7f58/ihqstx/std/2000x0/DRILL-DOUBLE-COAT-?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/3e9fd8fe-7f13-405f-b64d-300d629b7f58/ihqstx/std/2000x0/DRILL-DOUBLE-COAT-?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/3acad7b2-baaf-4a83-8f7e-262ffcc4c9c9/ihqstx/std/2000x0/DRILL-DOUBLE-COAT-?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/adaadba4-e25f-4a10-839e-1f7239a2035a/ihqstx/std/2000x0/DRILL-DOUBLE-COAT-?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/c4beb27b-6043-44a2-af61-212ed48507d5/ihqstx/std/2000x0/DRILL-DOUBLE-COAT-?quality=80&size=35&format=auto"
    ]
  },
  {
    id: 13,
    name: "Archetype cropped hood",
    description: "Long-sleeved hooded sweatshirt in soft fleece. Archetype line. GIVENCHY signature printed on the front. One kangaroo pocket on the front. 100% cotton ",
    price: 1000,
    brand: "Givenchy",
    category: "Hoodie",
    images: ["https://assets.givenchy.com/m/797de145356d858d/High_Resolution_JPG-BWJ03M3YAC001-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/797de145356d858d/High_Resolution_JPG-BWJ03M3YAC001-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/1103e76201c6b0ac/High_Resolution_JPG-BWJ03M3YAC001-03-08.jpg?imwidth=1500",
    ]
  },
  {
    id: 14,
    name: "Diy Imprint Cropped",
    description: "DIY Imprint Cropped Hoodie in washed black dry fleece. Dry fleece. Hood without drawstring. Dropped shoulders. Main material: 100% cotton",
    price: 1250,
    brand: "Balenciaga",
    category: "Hoodie",
    images: ["https://balenciaga.dam.kering.com/m/660899e1211f25e1/Small-783397TSVB51041_Y.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/52c0205c598ad5ed/Large-783397TSVB51041_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/10e28c800bd64757/Large-783397TSVB51041_G.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/3b4f0495b40a07d8/Large-783397TSVB51041_GR.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/5f5cf3aaa2b227b/Large-783397TSVB51041_I.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/714a420392779821/Large-783397TSVB51041_H.jpg?v=1"

    ]
  },
  {
    id: 15,
    name: "Crush Wallet",
    description: "Women's Crush Wallet On Chain Metallized Quilted in Silver. Silver metallized crushed calfskin, aged-silver hardware",
    price: 1100,
    brand: "Balenciaga",
    category: "Accessories",
    images: ["https://balenciaga.dam.kering.com/m/41f11be00fb4aaf5/Small-781723210IW8110_X.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/3714adde3b78870d/Large-781723210IW8110_F.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/2ceeef1d42beb614/Large-781723210IW8110_J.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/3d192f77fb7cbfdf/Large-781723210IW8110_D.jpg?v=3",
    ]
  },
  {
    id: 16,
    name: "Brushed leather",
    description: "Brushed leather and shearling mules. Refined style and comfortable details come together in the design of these brushed leather mules with shearling lining. The screen-printed lettering logo on the upper enhances the sleek and contemporary aesthetic of the shoe. ",
    price: 1150,
    brand: "Prada",
    category: "Shoes",
    images: ["https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLT.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLQ.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/1/1S0/1S008O/055F0002/1S008O_055_F0002_F_ZF05_SLD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"

    ]
  },
  {
    id: 17,
    name: "Cropped tank top",
    description: "Cropped tank top in cotton with 4G Liquid detail. Tank top in ribbed cotton. Crew neck. Cropped fit.",
    price: 400,
    brand: "Givenchy",
    category: "T-shirt",
    images: ["https://assets.givenchy.com/m/1122f665f4c9332/High_Resolution_JPG-BW70E63YQS800-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/1122f665f4c9332/High_Resolution_JPG-BW70E63YQS800-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/3175d8b1e58ec304/High_Resolution_JPG-BW70E63YQS800-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/7fd8c05a7f568575/High_Resolution_JPG-BW70E63YQS800-02-04.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/d265ee03bee5d0d/High_Resolution_JPG-BW70E63YQS800-03-08.jpg?imwidth=1500"
    ]
  },
  {
    id: 18,
    name: "Large Cargo Pants",
    description: "Large Cargo Pants in military beige cotton ripstop. Covered zip fly. Knee yokes. Main material: 100% cotton",
    price: 1650,
    brand: "Balenciaga",
    category: "Pants",
    images: ["https://balenciaga.dam.kering.com/m/50e996ec394f6971/Large-814571TQP132801_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/50e996ec394f6971/Large-814571TQP132801_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/56ac4298bfa0724f/Large-814571TQP132801_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/3a7a8f287e908b12/Large-814571TQP132801_J.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/306d944e8dae852/Large-814571TQP132801_H.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/3581298fee18964f/Large-814571TQP132801_I.jpg?v=1"

    ]
  },
  {
    id: 20,
    name: "Shearling shoulder bag",
    description: "This leather bag with a versatile design is enriched by the soft texture of shearling that emphasizes the sleek shape of the style. The enameled metal triangle logo completes the accessory with a distinctive touch.",
    price: 3000,
    brand: "Prada",
    category: "Accessories",
    images: ["https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_SLB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH181/2CTTF036S/2VH181_2CTT_F036S_V_OOM_SLO.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"

    ]
  },
  {
    id: 21,
    name: "Baggy Pants",
    description: "Baggy Pants in black denim. Denim. Waist and knee yokes. Balenciaga engraved flex buttons. Main material: 100% cotton",
    price: 1350,
    brand: "Balenciaga",
    category: "Pants",
    images: ["https://balenciaga.dam.kering.com/m/c49ba8b9e7acb0e/Medium-814161TQW641089_Y.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/6bb324aae5f85066/Large-814161TQW641089_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/1b782df85d8ecf1c/Large-814161TQW641089_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/5e4b0da86c17d6ff/Large-814161TQW641089_J.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/2ffd2a56a6242cc7/Large-814161TQW641089_H.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/25a966d83bbde2e2/Large-814161TQW641089_I.jpg?v=1"
    ]
  },
  {
    id: 22,
    name: "Isabelle Boxy",
    description: "Isabelle Boxy T-Shirt in faded red dry jersey. Dry jersey. Worn-out, destroyed effect. Balenciaga logo embroidered on left sleeve. Main material: 100% cotton",
    price: 700,
    brand: "Balenciaga",
    category: "T-shirt",
    images: ["https://balenciaga.dam.kering.com/m/73a45040296f47cf/Medium-826344TSVV66303_Y.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/608527d1f7bb8a62/Large-826344TSVV66303_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/49647a038ab3e26/Large-826344TSVV66303_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/53f41c88306e187a/Large-826344TSVV66303_G.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/558b0bf179a298b3/Large-826344TSVV66303_GR.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/36399cfafa696e77/Large-826344TSVV66303_I.jpg?v=1"

    ]
  },
  {
    id: 23,
    name: "Sleeveless cotton",
    description: "Sleeveless cotton mesh top. This sleeveless top is an iconic and versatile garment, reimagined in mesh knit that adds movement and expresses the lightness and elegance of summer. ",
    price: 1300,
    brand: "Prada",
    category: "T-shirt",
    images: ["https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/3/395/39599/16NDF0637/39599_16ND_F0637_S_OOO_MDR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"

    ]
  },
  {
    id: 24,
    name: "Sneakers in leather",
    description: "Low-top laced sneakers featuring perforated leather on the front panel, a gold-tone Saint Laurent signature across the pull tab and gold-tone Saint Laurent signature along the side.",
    price: 750,
    brand: "Saint-laurent",
    category: "Shoes",
    images: ["https://saint-laurent.dam.kering.com/m/34293c396a2e183a/Medium2-713602AAAWR9063_A.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/34293c396a2e183a/Medium2-713602AAAWR9063_A.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/6d39812a2fe1b36b/Medium2-713602AAAWR9063_B.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/450419851e0d0dce/Medium2-713602AAAWR9063_C.jpg?v=1",
      "https://saint-laurent.dam.kering.com/m/43200aeaebcfe546/Medium2-713602AAAWR9063_D.jpg?v=1"

    ]
  },
  {
    id: 25,
    name: "Cat jacquard",
    description: "Sweater in cat jacquard with crystals details. Long-sleeved sweater in cotton. Crew neck. 32% mohair, 30% polyamide, 20% cotton, 18% wool.",
    price: 2850,
    brand: "Givenchy",
    category: "Sweater",
    images: ["https://assets.givenchy.com/m/49e2d5827a987ee3/High_Resolution_JPG-BM90TR4YLA960-02-01.jpg?imwidth=1024",
      "https://assets.givenchy.com/m/253b6c783135c1d5/High_Resolution_JPG-BM90TR4YLA960-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/3ea54a6f1487843a/High_Resolution_JPG-BM90TR4YLA960-03-08.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/49e2d5827a987ee3/High_Resolution_JPG-BM90TR4YLA960-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/7969b71ea3508c89/High_Resolution_JPG-BM90TR4YLA960-02-04.jpg?imwidth=1500"

    ]
  },
  {
    id: 26,
    name: "Valentino Garavani ",
    description: "Valentino Garavani Antibes medium shopping bag in jacquard synthetic raffia with Cherryfic motif, detailed with side buckles and leather patches with VLogo Signature metal feature. The bag can be handheld or comfortably worn on the shoulder/crossbody thanks to the handles and shoulder strap.",
    price: 1800,
    brand: "Valentino",
    category: "Accessories",
    images: ["https://valentino-cdn.thron.com/delivery/public/image/valentino/ec5e51c0-89ce-438a-8915-079d715409b5/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/ec5e51c0-89ce-438a-8915-079d715409b5/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/d17ecffd-401a-4a2f-b2f7-72c9c69214a5/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/d270f757-050a-4e32-bde4-db631344731c/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/5df5bccd-9904-445d-a7d6-acf51aeaa816/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/9526e3c7-83d7-442b-a009-29269f921f2c/ihqstx/std/2000x0/VALENTINO-GARAVANI-ANTIBES-MEDIUM-SHOPPING-BAG-IN-JACQUARD-RAFFIA-WITH-CHERRYFIC-MOTIF?quality=80&size=35&format=auto"]
  },
  {
    id: 27,
    name: "Hevea Leather Boots",
    description: "Geared for city living, the Hevea leather lace-up boots for women showcase a streamlined aesthetic. Comfortable enough for everyday, the Hevea ankle boots are crafted from smooth calf leather with a tread sole. The lace-up style's minimalist aesthetic can easily be dressed up or down.",
    price: 1000,
    brand: "Moncler",
    category: "Shoes",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_X/dpx6uv/std/768x1152/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_X/dpx6uv/std/1571x2357/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_R/dpx6uv/std/768x1152/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_E/dpx6uv/std/768x1152/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_A/dpx6uv/std/768x1152/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J209B4F00170M4646999_B/dpx6uv/std/768x1152/hevea-leather-lace-up-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 28,
    name: "Cargo pants",
    description: "The Monogram 72 gains a unique texture through a refined jacquard technique, creating a subtle 3D relief effect evoking cloqué craftsmanship. Cargo pants in cloqué technical fabric, in recycled fibers. Button and zipped closure. 69% polyamide, 31% polyester.",
    price: 1500,
    brand: "Givenchy",
    category: "Pants",
    images: ["https://assets.givenchy.com/m/3601f3ee6865298b/High_Resolution_JPG-BM51KH15X4331-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/3601f3ee6865298b/High_Resolution_JPG-BM51KH15X4331-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/72169930bf5ba207/High_Resolution_JPG-BM51KH15X4331-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/4d8e4701b7730f3b/High_Resolution_JPG-BM51KH15X4331-02-04.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/4f5e81191dd4f4fd/High_Resolution_JPG-BM51KH15X4331-03-08.jpg?imwidth=1500",


    ]
  },
  {
    id: 29,
    name: "Double-wrap id bracelet",
    description: "Double-wrap bracelet in vegetable-tanned leather, adorned with a SAINT LAURENT ID plaque. Magnetic box clasp. Silver-toned hardware",
    price: 280,
    brand: "Saint-laurent",
    category: "Accessories",
    images: ["https://saint-laurent.dam.kering.com/m/34565cf76c08ed08/Medium2-758343AAC5U2281_A.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/34565cf76c08ed08/Medium2-758343AAC5U2281_A.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/6b38ad87757b6aff/Medium2-758343AAC5U2281_B.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/604332747a9c9177/Medium2-758343AAC5U2281_C.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/479107b7c0072f62/Medium2-758343AAC5U2281_D.jpg?v=2"
    ]
  },
  {
    id: 30,
    name: "Monogram Jacquard Jumper",
    description: "Instantly recognizable, this cotton jumper transforms Moncler's monogram into a geometric design. Transcending seasons, the lightweight knit can be worn alone or as an added layer under coats and jackets.",
    price: 850,
    brand: "Moncler",
    category: "Sweater",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_R/dpx6uv/std/768x1152/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_R/dpx6uv/std/768x1152/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_E/dpx6uv/std/768x1152/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_A/dpx6uv/std/768x1152/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_X/dpx6uv/std/1571x2357/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10919C00006M1367P74_B/dpx6uv/std/768x1152/monogram-cotton-jacquard-jumper-men-blue-and-red-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 31,
    name: "Embroidered",
    description: "A timeless addition to casual looks, this gabardine baseball cap is embellished with an embroidered logo. An adjustable back tab ensures a perfect fit.",
    price: 300,
    brand: "Moncler",
    category: "Accessories",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_X/dpx6uv/std/768x1152/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_X/dpx6uv/std/1571x2357/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_R/dpx6uv/std/768x1152/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_E/dpx6uv/std/768x1152/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_D/dpx6uv/std/1571x2357/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10913B0005404863778_C/dpx6uv/std/768x1152/embroidered-logo-gabardine-baseball-cap-men-navy-blue-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"
    ]
  },
  {
    id: 32,
    name: "Cotton polo shirt",
    description: "A strip motif in a contrasting color animates this cotton polo shirt characterized by a boxy fit and decorated with the lettering logo. Short sleeves. Boxy fit. Main material: 100% cotton",
    price: 925,
    brand: "Prada",
    category: "T-shirt",
    images: ["https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN922/16S0F0AU1/UJN922_16S0_F0AU1_S_WMO_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
    ]
  },
  {
    id: 33,
    name: "Political Campaign Hoodie",
    description: "Political Campaign Hoodie Medium Fit in white, black and blue curly fleece. Curly fleece.  Hood with drawstring. Main material: 100% cotton",
    price: 900,
    brand: "Balenciaga",
    category: "Hoodie",
    images: ["https://balenciaga.dam.kering.com/m/46c10d1ecb89f489/Medium-600583TKVI99084_Y.jpg?v=5",
      "https://balenciaga.dam.kering.com/m/48e647a44a52893d/Large-600583TKVI99084_F.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/331f8c87f8dd405/Large-600583TKVI99084_D.jpg?v=4",
      "https://balenciaga.dam.kering.com/m/3b85088a2b246d24/Large-600583TKVI99084_G.jpg?v=5",
      "https://balenciaga.dam.kering.com/m/54dd9046e13b9b68/Large-600583TKVI99084_I.jpg?v=6",
      "https://balenciaga.dam.kering.com/m/531d68edd77d85cc/Large-600583TKVI99084_H.jpg?v=5"
    ]
  },
  {
    id: 34,
    name: "Shirt Dress",
    description: "Inspired by the natural world, this shirt dress is reimagined with a romantic floral pattern. The lightweight poplin piece features a belted waistline, creating a feminine silhouette.",
    price: 1500,
    brand: "Moncler",
    category: "Dress",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_R/dpx6uv/std/768x1152/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_R/dpx6uv/std/768x1152/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_X/dpx6uv/std/768x1152/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_A/dpx6uv/std/768x1152/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_B/dpx6uv/std/768x1152/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10932G00009598JKF19_G/dpx6uv/std/1571x2357/floral-print-cotton-shirt-dress-women-light-beige-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 35,
    name: "Gaia  Shearling Boots",
    description: "A Moncler signature, the Gaia Low boots are crafted from precious, long-haired shearling. The design helps keep you dry with a waterproof membrane and water-repellent toe caps while padding adds warmth. Enhancing traction and slip resistance, the piece is completed by a Vibram® Megagrip tread. The calf-length style featured on the Autumn/Winter 2024 runway, an outdoor experience that paid homage to the brand's mountain roots.",
    price: 2900,
    brand: "Moncler",
    category: "Shoes",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/J20984H00040M5418999_X/dpx6uv/std/768x1152/gaia-low-shearling-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J20984H00040M5418999_X/dpx6uv/std/1571x2357/gaia-low-shearling-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J20984H00040M5418999_R/dpx6uv/std/768x1152/gaia-low-shearling-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J20984H00040M5418999_D/dpx6uv/std/1571x2357/gaia-low-shearling-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/J20984H00040M5418999_B/dpx6uv/std/768x1152/gaia-low-shearling-boots-women-black-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
    ]
  },
  {
    id: 36,
    name: "Zip-up blouson",
    description: "Zip-up blouson with a two-way stand collar and diagonal shoulder bands. Cupro and cotton lining. 100% LAMBSKIN",
    price: 4600,
    brand: "Saint-laurent",
    category: "Outerwear",
    images: ["https://saint-laurent.dam.kering.com/m/5a83d73da4bd7207/Medium2-821041YCNF21000_A.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/5a83d73da4bd7207/Medium2-821041YCNF21000_A.jpg?v=2",
      "https://saint-laurent.dam.kering.com/m/7f5d1550ce5c6108/Medium2-821041YCNF21000_C.jpg?v=3",
      "https://saint-laurent.dam.kering.com/m/1f415e8ef38aa454/Medium2-821041YCNF21000_Y.jpg?v=1",
    ]
  },
  {
    id: 37,
    name: "Coat in wool",
    description: "Long coat in wool twill. Pointed collar. Removable GIVENCHY label stitched on the cuff. Buttoned cuffs.",
    price: 4100,
    brand: "Givenchy",
    category: "Outerwear",
    images: ["https://assets.givenchy.com/m/344f6760a2ab4bc3/High_Resolution_JPG-BMC08N15WN410-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/344f6760a2ab4bc3/High_Resolution_JPG-BMC08N15WN410-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/5c366fc075d26ba6/High_Resolution_JPG-BMC08N15WN410-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/5c366fc075d26ba6/High_Resolution_JPG-BMC08N15WN410-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/150f90103018af83/High_Resolution_JPG-BMC08N15WN410-02-04.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/7a4700d39a283e48/High_Resolution_JPG-BMC08N15WN410-03-08.jpg?imwidth=1500"

    ]
  },
  {
    id: 38,
    name: "Subtila Round Sunglasses",
    description: "Characterised by effortless elegance, the Subtila sunglasses pair a gunmetal frame with dark blue lenses. The eyewear is crafted from titanium, ensuring they stay lightweight. The shades can be adapted for prescription lenses.",
    price: 430,
    brand: "Moncler",
    category: "Accessories",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_X/dpx6uv/std/768x1152/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_X/dpx6uv/std/1571x2357/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_E/dpx6uv/std/768x1152/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_R/dpx6uv/std/768x1152/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_B/dpx6uv/std/768x1152/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/5690LME4006D1005XL80_C/dpx6uv/std/1571x2357/subtila-round-sunglasses-gunmetal-gray-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 39,
    name: "Re-Nylon and jersey",
    description: "The Prada jersey T-shirt is one of the brand’s must-have items. Its luxurious simplicity and sophisticated allure reinvents basics, by giving them new meaning. This style is enhanced by a zipped front pocket in Re-Nylon, an innovative, sustainable fabric. An enameled-metal triangle logo provides an iconic allure. ",
    price: 925,
    brand: "Prada",
    category: "T-shirt",
    images: ["https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN661/11CKF0002/UJN661_11CK_F0002_S_221_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"

    ]
  },
  {
    id: 40,
    name: "Bomber Jacket",
    description: "Bomber Jacket in black smooth soft cowskin. Cowskin. Zipped front. 2 slash pockets at front",
    price: 9030,
    brand: "Balenciaga",
    category: "Outerwear",
    images: ["https://balenciaga.dam.kering.com/m/510e5d833d6cf7e4/Medium-817666TRS311000_Y.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/225db81599300b88/Large-817666TRS311000_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/11783689346cacbd/Large-817666TRS311000_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/6001afe18103d8d0/Large-817666TRS311000_G.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/23a591b6fff988a8/Large-817666TRS311000_I.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/68a13f46c7e61578/Large-817666TRS311000_H.jpg?v=1"

    ]
  },
  {
    id: 41,
    name: "Logo Patch Hoodie",
    description: "Crafted from plush cotton fleece, this hoodie is a casual wardrobe essential. Finished with a miniature version of the classic logo patch, the style can be effortlessly paired with matching bottoms",
    price: 610,
    brand: "Moncler",
    category: "Hoodie",
    images: ["https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_R/dpx6uv/std/768x1152/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_R/dpx6uv/std/768x1152/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_E/dpx6uv/std/768x1152/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_D/dpx6uv/std/1571x2357/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_X/dpx6uv/std/1571x2357/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif",
      "https://moncler-cdn.thron.com/delivery/public/image/moncler/K10918G0003589AUJ875_A/dpx6uv/std/768x1152/logo-patch-cotton-hoodie-men-emerald-green-moncler.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=avif"

    ]
  },
  {
    id: 42,
    name: "Pleated Dress",
    description: "Double Sleeve Pleated Dress in green AI Croc technical crepe is fromlook 22 of Balenciaga Spring 25 Collection.  Two long panels at collar to tie like a Lavalière or let hang down. Trompe l'oeil volume at back: visible blouse bottom, cinched at the waist at front",
    price: 5520,
    brand: "Balenciaga",
    category: "Dress",
    images: ["https://balenciaga.dam.kering.com/m/1fc32206d6c1849f/Medium-814149TRLC93001_Y.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/6951b6daec9b4902/Large-814149TRLC93001_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/41963fd26a913493/Large-814149TRLC93001_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/7c07b2f1dfac7994/Large-814149TRLC93001_G.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/5931d3a7d2d58ca7/Large-814149TRLC93001_I.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/19cdcad5af42d79e/Large-814149TRLC93001_H.jpg?v=2"

    ]
  },
  {
    id: 43,
    name: "Cotton pants",
    description: "Utility pockets give a functional character to these cotton wide-leg pants with a classic cut. The enameled metal triangle logo completes the garment with a distinctive note.",
    price: 1520,
    brand: "Prada",
    category: "Pants",
    images: ["https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH471/11BZF0002/SPH471_11BZ_F0002_S_OOO_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
    ]
  },
  {
    id: 44,
    name: "Triple S Sneaker ",
    description: "Triple S Sneaker in beige Bananatex. Worn-out effect. Triple S rubber branding on the tongue. Bicolor laces recalling hiking boots’ laces",
    price: 900,
    brand: "Balenciaga",
    category: "Shoes",
    images: ["https://balenciaga.dam.kering.com/m/6954f1863facc5a/Medium-524039W2BN19700_X.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/1c446b9162283b19/Large-524039W2BN19700_F.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/60caf877a65c7792/Large-524039W2BN19700_J.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/7dfdf6fd12200446/Large-524039W2BN19700_I.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/6759f62564e368f3/Large-524039W2BN19700_L.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/7eae13ddf91781a8/Large-524039W2BN19700_D.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/3a955303d0ff5563/Large-524039W2BN19700_E.jpg?v=1"
    ]
  },
  {
    id: 45,
    name: "Sablé dress",
    description: "This long sablé dress features a silhouette inspired by retro styles with romantic allure. The boat neck column dress is decorated with the three-dimensional fabric triangle logo.",
    price: 2400,
    brand: "Prada",
    category: "Dress",
    images: ["https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/P/P3J/P3J20L/S2YF0304/P3J20L_S2Y_F0304_S_231_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
    ]
  },
  {
    id: 46,
    name: "Cotton hoodie",
    description: "This soft cotton hoodie features sporty oversized lines. The garment with a relaxed fit is characterized by the roomy pouch pocket and ribbed knit trim. The triangle logo reinterpreted with a conceptual design adds its sleek but iconic signature touch. ",
    price: 1850,
    brand: "Prada",
    category: "Hoodie",
    images: ["https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL93A/11LNF0M10/UJL93A_11LN_F0M10_S_232_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
    ]
  },
  {
    id: 47,
    name: "T-shirt with patches",
    description: "Givenchy House introduces the 'Paradise' collection: inspired by souvenir jackets, it showcases playful patches that exude positivity and joyful energy. These small patches are meticulously embroidered and hand-applied, with the entire process requiring 2 hours of skilled craftsmanship.",
    price: 990,
    brand: "Givenchy",
    category: "T-shirt",
    images: ["https://assets.givenchy.com/m/7ff4ef6a9e06bc73/High_Resolution_JPG-BM71MG3YQQ001-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/7ff4ef6a9e06bc73/High_Resolution_JPG-BM71MG3YQQ001-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/335380ebb3aab870/High_Resolution_JPG-BM71MG3YQQ001-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/7e0937d9181a64/High_Resolution_JPG-BM71MG3YQQ001-03-08.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/58d38aad07caf19a/High_Resolution_JPG-BM71MG3YQQ001-02-04.jpg?imwidth=1500"

    ]
  },
  {
    id: 48,
    name: "Suede Blouson",
    description: "SNAP CHEST. KNIT HEM. FULLY LINED. 100% LEATHER. MADE IN ITALY",
    price: 8990,
    brand: "Tom Ford",
    category: "Outerwear",
    images: ["https://cdn.media.amplience.net/i/tom_ford/LBS061-LMS001S23_DP266_OS_G?w=1280",
      "https://cdn.media.amplience.net/i/tom_ford/LBS061-LMS001S23_DP266_OS_A?w=1280",
      "https://cdn.media.amplience.net/i/tom_ford/LBS061-LMS001S23_DP266_OS_G?w=1280",
      "https://cdn.media.amplience.net/i/tom_ford/LBS061-LMS001S23_DP266_OS_H?w=1280",
    ]
  },
  {
    id: 49,
    name: "Coutere Short Dress",
    description: "Short doll silhouette dress in Crepe Couture with Ottoman plastron with velvet bow detail.  Ottoman neckline detail. Velvet belt (Silk Ottoman interior) with bow detail. Flower and V Logo Stripes lining (75% Acetate, 25% Silk)",
    price: 3000,
    brand: "Valentino",
    category: "Dress",
    images: ["https://valentino-cdn.thron.com/delivery/public/thumbnail/valentino/2394130b-d5b6-48e6-b84f-7831127ca40f/ihqstx/std/500x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/2394130b-d5b6-48e6-b84f-7831127ca40f/ihqstx/std/2000x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/6967787d-d61f-40b6-a88c-b00866d65ce3/ihqstx/std/2000x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/94c518de-5041-413e-b6f7-9b62072eed9d/ihqstx/std/2000x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/d32b1dfc-9174-4f9e-86e3-2f71a0b01c50/ihqstx/std/2000x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto",
      "https://valentino-cdn.thron.com/delivery/public/image/valentino/3bbf5fd0-2626-45fc-87cf-9f18a183d1ea/ihqstx/std/2000x0/CREPE-COUTURE-SHORT-DRESS-WITH-BOWS?quality=80&size=35&format=auto"

    ]
  },
  {
    id: 50,
    name: "Wide-leg denim",
    description: "These menswear-fit jeans with a mid-rise waist and wide legs have a used finish that emphasizes the texture of the denim, giving the style vintage allure. The relaxed fit style with five pockets is completed by the archive logo printed on a label. ",
    price: 1470,
    brand: "Prada",
    category: "Jeans",
    images: ["https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP522/16PKF0V3N/GFP522_16PK_F0V3N_S_OOO_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
    ]
  },
  {
    id: 51,
    name: "Straight jeans",
    description: "Straight jeans in denim. Jeans in denim. Waist with loops, zipped and button closure. Small GIVENCHY signature embroidered on the back.",
    price: 1050,
    brand: "Givenchy",
    category: "Jeans",
    images: ["https://assets.givenchy.com/m/3f1ce854cb847360/High_Resolution_JPG-BW51605YC9401-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/3f1ce854cb847360/High_Resolution_JPG-BW51605YC9401-03-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/392921d9e282a412/High_Resolution_JPG-BW51605YC9401-02-01.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/25be36ea34f5677f/High_Resolution_JPG-BW51605YC9401-02-04.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/15f8428a855ad4fa/High_Resolution_JPG-BW51605YC9401-02-03.jpg?imwidth=1500",
      "https://assets.givenchy.com/m/6be8245203bc3a4a/High_Resolution_JPG-BW51605YC9401-03-08.jpg?imwidth=1500"
    ]
  },
  {
    id: 52,
    name: "Knee Baggy Jeans",
    description: "Y2K Stretched Knee Baggy Pants on knock off blue denim is from look 39 of Balenciaga Winter 24 Collection. Balenciaga engraved flex buttons. Jacron at back. Main material: 100% cotton",
    price: 1820,
    brand: "Balenciaga",
    category: "Jeans",
    images: ["https://balenciaga.dam.kering.com/m/3fabfc502dc2443f/Medium-809360TRW775760_Y.jpg?v=3",
      "https://balenciaga.dam.kering.com/m/1d3de2867208c826/Large-809360TRW775760_F.jpg?v=4",
      "https://balenciaga.dam.kering.com/m/5d6527a0a5d8b6eb/Large-809360TRW775760_D.jpg?v=4",
      "https://balenciaga.dam.kering.com/m/6bcc8079dedcaa2/Large-809360TRW775760_G.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/741ed5472e20d02a/Large-809360TRW775760_I.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/baa41dd474dbf5f/Large-809360TRW775760_H.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/e3ef2073478293e/Large-809360TRW775760_J.jpg?v=1"
    ]
  },
]
export const NftProducts = [
  {
    id: 1001,
    brand: "Balenciaga",
    images: [
      "/images/BalenciW.png",
      "/images/BalenciG.png",
      "/images/BalenciB.png",
      "/images/BalenciAll.png"
    ],
    price: [2000, 2500, 3000],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1002,
    brand: "Prada",
    images: [
      "/images/PradaW.png",
      "/images/PradaG.png",
      "/images/PradaB.png",
      "/images/PradaAll.png"
    ],
    price: [2000, 2500, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1003,
    brand: "Moncler",
    images: [
      "/images/monW.png",
      "/images/monG.png",
      "/images/MonclerB.png",
      "/images/monAll.png"
    ],
    price: [1500, 2000, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1004,
    brand: "Givenchy",
    images: [
      "/images/givW.png",
      "/images/givG.png",
      "/images/givB.png",
      "/images/givall.png"
    ],
    price: [1500, 2000, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1005,
    brand: "Tom Ford",
    images: [
      "/images/tomW.png",
      "/images/tomG.png",
      "/images/tomB.png",
      "/images/tomall.png"
    ],
    price: [1500, 2000, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1006,
    brand: "Saint-laurent",
    images: [
      "/images/saW.png",
      "/images/saG.png",
      "/images/saB.png",
      "/images/saall.png"
    ],
    price: [1500, 2000, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
  {
    id: 1007,
    brand: "Valentino",
    images: [
      "/images/vaW.png",
      "/images/vaG.png",
      "/images/vaB.png",
      "/images/vaall.png"
    ],
    price: [1500, 2000, 3500],
    description: [
      "NFT with 10% discount for 5 purchases",
      "NFT with 10% discount for 3 months",
      "Real NFT with lifetime 10% discount"
    ]
  },
]

export default products;
