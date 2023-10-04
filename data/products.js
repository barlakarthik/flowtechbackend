const products = [
    {
      name: "Cooking Oil",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/ky3b0y80/edible-oil/g/r/h/-original-imagaefeq2j3wcbv.jpeg?q=70",
      description: "Cooking Rice Bran Safflower Blended Oil",
      price: 479,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Desi Ghee",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kxgfzbk0/ghee/x/r/q/1-classic-desi-tetrapack-1-flipkart-grocery-original-imag9wsz7dcsjrg2.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc.",
      price: 537,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Peanut",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/jp02t8w0/pulses/y/k/m/250-groundnuts-peanut-safe-harvest-original-imafbcadvgfg74xj.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc.",
      price: 57,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Moong Dal",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0/pulses/p/4/4/1-moong-dal-moong-dal-unbranded-original-imafw49gwwqyuhhr.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc.",
      price: 118,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "AASHIRVAAD",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/ki96c280/flour/r/j/r/1-atta-with-multigrains-1-multigrain-flour-aashirvaad-original-imafy2vzhha44kgx.jpeg?q=70",
      description:
        "Made with the choicest of grains sourced from the fields across India. It's a blend of 6 grains � wheat, maize, oats, soya, channa and psyllium husk. Just 3 rotis fulfill 35% of your daily fibre intake & have the same fibre as in 6 carrots or 4 beetroots",
      price: 332,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Idly Rawa",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kzvlua80/flour/l/4/h/-original-imagbshfhabtq6vw.jpeg?q=70",
      description:
        "Made with the choicest of grains sourced from the fields across India. It's a blend of 6 grains � wheat, maize, oats, soya, channa and psyllium husk. Just 3 rotis fulfill 35% of your daily fibre intake & have the same fibre as in 6 carrots or 4 beetroots",
      price: 38,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Chilli Powder",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kpwybgw0/spice-masala/c/c/q/chilli-powder-pouch-aashirvaad-powder-original-imag4fhf8w4qnyxs.jpeg?q=70",
      description:
        " It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc.",
      price: 160,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Turmeric Powder",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/ku79vgw0/spice-masala/q/m/c/500-turmeric-powder-1-pouch-flipkart-grocery-powder-original-imag7dhdnz5fezbg.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc.",
      price: 55,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Basmati Rice",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kqidx8w0/rice/s/2/x/white-hamesha-steam-basmati-rice-bag-fortune-original-imag4gb3n99n3hcs.jpeg?q=70",
      description:
        "Bring home the goodness of basmati and enjoy the savory rise dishes. Hamesha! Every grain of Fortune Hamesha Basmati Rice is carefully aged, dried, dehusked, processed, graded, and sorted with a sophisticated color sorting machine at our state-of-the-art plant before packed.",
      price: 335,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Sona Masoori Rice",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0/rice/v/p/v/5-raw-white-sona-masoori-rice-pouch-unbranded-original-imafw43r8ryykhs6.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products. ",
      price: 267,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Kaju Cashews",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/shopsy-nut-dry-fruit/q/n/y/500-popular-w400-raw-kaju-1-pouch-farmley-original-imagh8y5sm8yjgpw.jpeg?q=70",
      description:
        " It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 354,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Fard Dates",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/nut-dry-fruit/e/6/e/400-premium-fard-1-box-farmley-original-imaggdyktshm3t6e.jpeg?q=70",
      description:
        "Farmley, source all the nuts & dry fruits directly from the farms which are hygienically packed in a HACCP certified unit. Dates are high in fiber that prevents constipation & controls blood sugar level. These are naturally sweet due to which they can be a great & healthy alternative to white sugar. High in calories which makes dates a perfect snack to fill you up with instant energy.Our dates are specially handpicked, 100 % natural and free from unadulteration.",
      price: 181,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "3 Roses",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l3uhvgw0/tea/o/7/p/-original-imagevkfahgg9rma.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products. ",
      price: 215,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Taj Mahal Tea Box",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l0lbrm80/tea/p/1/n/-original-imagccby8h3b5ayb.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 709,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "B Natural Guava Juice",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/ktx9si80/drinks-juice/8/y/x/guava-tetrapack-b-natural-original-imag75guuhptjcg6.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 96,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Paper boat Juice ",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/drinks-juice/d/r/4/-original-imagchvbzz9tfbhf.jpeg?q=70",
      description:
        "You can enjoy the soothing and lingering taste of delicious mango juice (aamras) with Paper Boat. It contains no artificial colours, preservatives, or GMOs to give you authentic taste and enhanced enjoyment.",
      price: 89,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Pediasure Premium Chocolate",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/milk-drink-mix/r/w/v/-original-imagc7wyer7uzbgg.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 688,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "HORLICKS Classic Malt",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kgwld3k0/milk-drink-mix/q/9/e/750-classic-malt-pouch-horlicks-original-imafxf7xgcukt2hf.jpeg?q=70",
      description:
        " It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 373,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Noodles Vegetarian",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l572ufk0/noodle/9/t/5/-original-imagfx6apbwx7uvz.jpeg?q=70",
      description:
        "Maggi introduces the New Maggi Special Masala Noodles, a recipe of 20 Spices and Herbs. Made with a blend of finely ground and whole spices, and herbs, the all-new Maggi Instant Noodles have a special and flavourful tastemaker sachet inside. These spices have been roasted to perfection, providing a distinct aroma and colour to your Maggi noodles. Storage - Store in a cool, dry and hygienic place to protect from Insects, pets & Strong Odours.",
      price: 149,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "YiPPee",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/pasta/q/t/7/-original-imagd4gdtcggfgff.jpeg?q=70",
      description:
        "The lip-smacking and delicious flavours make it a favourite amongst everyone who tastes it. The buttery smooth taste and YiPPee’s masala flavour will leave you wanting more. Easy to prepare and quick to finish, Sunfeast YiPPee! Tricolor Instant Pasta cooks in up to 5 minutes. It serves as a truly versatile snack that can be enjoyed at anytime of the day. ",
      price: 22,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Priya Mango Pickle",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/jatym4w0/pickle-murabba/z/d/3/300-na-glass-bottle-pickle-priya-original-imafybfpnz6wduz2.jpeg?q=70",
      description:
        " It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products.",
      price: 99,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Priya Ginger Pickle",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/jatym4w0/pickle-murabba/h/v/z/300-na-glass-bottle-pickle-priya-original-imafybfqveth8zhk.jpeg?q=70",
      description:
        "It is pertinent to note that, actual product packaging and materials may contain more and/or different information which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions etc. We recommend the consumers to always read the label carefully before using or consuming any products. ",
      price: 99,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Parachute Pure Coconut Hair Oil ",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/hair-oil/i/m/6/-original-imagc5ywdn5upe97.jpeg?q=70",
      description:
        "his coconut oil has been manufactured using hand-picked coconuts and it has undergone a 5-stage purification process for enhanced purity.100% Pure Coconut Oil",
      price: 98,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Kesh King",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l3lx8cw0/shampoo/j/a/n/-original-imagep3bchzvckxh.jpeg?q=70",
      description:
        "Kesh King Ayurvedic HairFall Expert|Reduce HairFall|Aloe & 21 Ayurvedic Herbs",
      price: 274,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Closeup",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/toothpaste/t/s/g/-original-imagkywhgh3t7bzg.jpeg?q=70",
      description:
        "Closeup Everfresh+ Gel Toothpaste now in Triple Fresh Formula harnesses the combined power of 3 components – Anti-bacterial mouthwash, Purifying Gel and Natural Extracts of Tea Tree and Eucalyptus to keep your mouth clean, protected and fresh.",
      price: 135,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "HIMALAYA Complete Care Toothpaste",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/j3uh47k0/toothpaste/f/t/d/150-complete-care-himalaya-original-imaeuwfpgtr59sas.jpeg?q=70",
      description:
        "Closeup Everfresh+ Gel Toothpaste now in Triple Fresh Formula harnesses the combined power of 3 components – Anti-bacterial mouthwash, Purifying Gel and Natural Extracts of Tea Tree and Eucalyptus to keep your mouth clean, protected and fresh.",
      price: 79,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "NIVEA Body Lotion",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/moisturizer-cream/h/c/p/-original-imagg9guxzdxh6yg.jpeg?q=70",
      description:
        "Radiant, creamy, and smooth - your skin will get a fresh lease of life with the Nivea Body Milk Nourishing Lotion. It has a creamy formula with Hydra IQ and Almond Oil to give you well-nourished, soft skin.",
      price: 259,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Vaseline",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l2dmky80/moisturizer-cream/a/e/h/-original-imagdqanhz2gmebb.jpeg?q=70",
      description:
        "Get healthy and glowing skin with the Vaseline Instant Fairness Lotion. Infused with the micro-droplets of Vaseline jelly, this lotion heals dry and damaged skin and gives you visibly fairer skin.",
      price: 369,
      category: "groceries",
      countInStock: 15,
    },
    {
      name: "Google Pixel 6a",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70",
      description:
        "Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features. Powered by the Google Tensor processor built especially for Pixel enables you to experience seamless juggling and multitasking. Moreover, the powerful battery adapted into this phone gives enormous power to your phone allowing it to run for a prolonged period. Furthermore, with Face Unblur, Magic Eraser, Night Sight, and Real Tone features incorporated into this phone you can capture masterpieces and enjoy impeccable imagery.",
      price: 30299,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "Infinix HOT 20 Play",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70",
      description:
        "Enjoy life on a large screen with the Infinix HOT 20 Play smartphone. It features a 17.32 cm (6.82) Punch Hole display with a refresh rate of 90 Hz to offer an enchanting visual experience. Its 6000 mAh battery makes it powerful enough to last a long time. It also boasts an amazing camera that enables you to capture photos and memories in stunning detail.",
      price: 8199,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "realme 10 Pro+ 5G",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/v/j/h/-original-imagkp8fvenrrkth.jpeg?q=70",
      description:
        "Display your personality and make a fashion statement with the Realme 10 Pro+ 5G, which gives you a fantastic user experience. With its 17.01 cm (6.7) AMOLED curved display screen that has 2160 Hz PWM Dimming, TUV Rheinland Low Blue Light Certificate, 1260 Hz Turbocharged Touch Sampling, and X-touch Anti-mistouch Algorithm, this smartphone makes a great advancement. With its 108 MP ProLight Camera, this smartphone also provides you with amazing photographic and filming features that let you capture priceless memories. This smartphone further advances the advancement by providing you with a Dimensity 1080 5G Processor, which is completely compatible with all 5G bands. Moreover, the Realme 10 Pro+ 5G's large 8+8 GB Dynamic RAM arrangement allows you to view many files or programmes, play games, and switch between apps without experiencing any latency.",
      price: 24999,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "POCO M4 Pro",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/8/9/n/-original-imagc7tmhcbrarpk.jpeg?q=70",
      description:
        "With 6 GB of RAM, 128 GB of internal storage, Helio G96 processor, UFS 2.2 WriteBooster, and Liquid Cooling Technology, this POCO M4 Pro is an elegantly built phone for all your multitasking requirements. This phone can steal the show everywhere you carry it due to its appealing design. This phone delivers a compelling visual experience with a 16.33 cm (6.43) savvy display, a refreshing rate of 90 Hz, and a touch sampling rate of 180 Hz. This phone boasts a 5000 mAh battery that is capable of lasting for a long period. It also has a 33 W quick charging interface that can fully charge your phone in around 61 minutes. Additionally, This phone has a triple camera setup that includes a 64 MP back camera and 8 MP Ultrawide lens with a field of vision of 118 degrees for taking high-quality photos. It is also equipped with a 16 MP front camera that helps capture stunning selfies.",
      price: 13499,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "OPPO Reno8T 5G",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/d/u/7/-original-imagmgy5ywvzdv6g.jpeg?q=70",
      description:
        "With the Oppo Reno8T 5G smartphone, which is brimming with amazing features, you can capture mesmerising visuals in a style that fits your individuality. This phone features a seamless hyperbolic design, weighs 171 g, is only 7.7 mm thick, and fits perfectly in your hand. This gives the phone a natural feel and a sleek look. You can also take stunning photos that serve as the basis for your creativity with the help of the smart 108 MP Portrait Camera with Premium Microlens, a 2 MP Depth Camera, and a 32 MP Selfie Camera. Furthermore, you can say goodbye to sluggish performance with 8 GB of RAM and up to 8 GB of extra RAM. Moreover, with lightning-fast 5G and a Qualcomm Snapdragon 6 nm processor, do anything with ease. This phone's rapid processing makes your experience more pleasurable.",
      price: 29999,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "vivo Y100 5G",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/a/d/-original-imagmvgczczy8s9e.jpeg?q=70",
      description:
        "The Vivo Y100 5G features colour-changing fluorite AG glass that changes colour with changes in environment and time. The 64 MP OIS anti-shake camera helps to take steady and cinematic images without any hassle. This smartphone has 8 GB RAM with an additional 8 GB of extended RAM, which allows you to keep up to 27 apps in the background. It uses a powerful MediaTek Dimensity 900 processor to give you a smooth 5G experience, and its 4500 mAh battery with 44 W FlashCharge lets the phone’s battery last for a  long time This smartphone has many camera features, so you can create vlogs, movies, and click portraits as you desire. The Funtouch OS 13, allows you to have a secure OS experience, in addition to that you can also enjoy personalised settings, privacy protection, and much more.",
      price: 24999,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "Redmi Note 11S",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/8/a/-original-imagbwx4ahgqxgg9.jpeg?q=70",
      description:
        "Redmi Note 11S SET THE BAR WITH PRO LEVEL PHOTOGRAPHY Capture incredible shots and finest details with 108MP camera. 90Hz Refresh Rate IRRESISTIBLY SMOOTH High Refresh Rate of 90Hz means smoother scrolling and graphics resulting in outstanding user experience. Massive 5000mAh Battery 33W Pro Fast Charging With 33W Pro Fast Charging and 5000mAh Battery, get ultra-long battery life and improved charging efficiency",
      price: 16999,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "Nothing Phone",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70",
      description:
        "The Nothing Phone (1) boasts an elegant style that comes to life with beautiful symbols to enable an enriched connection between you and your device. Moreover, its simplistic design ensures that you are never out of the limelight wherever you go.",
      price: 27999,
      category: "mobiles",
      countInStock: 15,
    },
    {
      name: "Running Shoes",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/o/e/9-5g-845-campus-mod-blu-wht-original-imag4g3xnanhz7zk-bb.jpeg?q=70",
      description: "Sparx Running Shoes For Men",
      price: 1047,
      category: "footwear",
      countInStock: 15,
    },
    {
      name: "Sneakers ",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70",
      description: "Modern Trendy Sneakers boot Sneakers Sneakers For Men ",
      price: 599,
      category: "footwear",
      countInStock: 15,
    },
    {
      name: "Sandal",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/x/x/c/6-xxx-01-black-red-6-kripto-black-red-original-imagj98ybgmbzjnf.jpeg?q=70",
      description: "Men Black, Red Sandal",
      price: 219,
      category: "footwear",
      countInStock: 15,
    },
    {
      name: "Flipflop",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70",
      description:
        "Mens Comfortable Trending And Stylish Multicolor Embozing Flipflop",
      price: 239,
      category: "footwear",
      countInStock: 15,
    },
    {
      name: "Boots",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/l5cslu80/shoe/l/f/2/8-lacedboot-2n2-black-original-imaggfs8redhwdzq.jpeg?q=70",
      description: "Men's Handmade Leather Boots for Men Boots For Men",
      price: 899,
      category: "footwear",
      countInStock: 15,
    },
    {
      name: "Lofers",
      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/4/u/x/7-kl8040-grey-7-killer-grey-original-imagg3b2q24ynbhu.jpeg?q=70",
      description:
        "Synthetic Leather |Lightweight|Comfort|Summer|Trendy|Walking|Daily Use Loafers For Men ",
      price: 629,
      category: "footwear",
      countInStock: 15,
    },
    ,
    {
      name: "PARK AVENUE",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/perfume/e/r/7/100-conquer-and-harmony-eau-de-parfum-park-avenue-men-original-imaggcs5avg4fqmc.jpeg?q=70",
      description:
        "Presenting All eau-de-partum, the latest offering from the master perfumers at Park Avenue. With its powerful and masculine features combined together, this esp. has strong and invigorating notes of amber intertwined with mandarin, with a hint of woody and musky notes. It opens with a fresh citrus and mandarin note followed by a sweet, spicy like nutmeg and cinnamon. Its 3 layered notes unwrap with time and its the perfect companion for a man obsessed with new voyages!.",
      price: 496,
      category: "deo",
      countInStock: 15,
    },
    {
      name: "FOGG",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/6/y/o/scent-impressio-50ml-eau-de-parfum-fogg-men-original-imag3m22yz8cxnp5.jpeg?q=70",
      description:
        "Feel fresh, cool and confident all through the day's activities. It is refreshing fragrance ensures your refreshed and gentle experience all through the day by giving you 100 percent protection from body odours and perspiration. It provides you strong enough aroma which lasts for hours",
      price: 242,
      category: "deo",
      countInStock: 15,
    },
    {
      name: "Whisky",
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/kt4ozgw0/perfume/f/7/y/100-whisky-smoke-edp-100-ml-eau-de-parfum-beardo-men-original-imag6jnjcywmxgeq.jpeg?q=70",
      description:
        "Pour yourself a brilliantly boozy concoction called Beardo Whiskey Smoke Eau de Parfum. Its unique and intense aroma is sure raise your bar (pun intended!). This utterly masculine fragrance from Beardo is strong, long-lasting that lets you be outlandish with ultimate sophistication.This perfume features a unique blend of fragrance from Whiskey along with exotic Oud wood, Tobacco, Cinnamon and indulgent Vanilla.",
      price: 589,
      category: "deo",
      countInStock: 15,
    },
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      category: "electronics",
      price: 499,
      countInStock: 15,
    },
    {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      category: "electronics",
  
      price: 1300,
      countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      category: "electronics",
      price: 50,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      category: "electronics",
      price: 233,
      countInStock: 4,
    },
    {
      name: "JBL FLIP 4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      category: "electronics",
      price: 140,
      countInStock: 10,
    },
  ];
  
  export default products;
  