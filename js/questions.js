// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "Which of the following is the basic building block of carbohydrates?",
    "answer": "Monosaccharide",
    "options": [
      "Amino acid",
      "Fatty acid",
      "Nucleotide",
      "Monosaccharide"
    ]
  },
  {
    "numb": 2,
    "question": "Glucose, fructose, and galactose are examples of:",
    "answer": "Monosaccharides",
    "options": [
      "Disaccharides",
      "Polysaccharides",
      "Monosaccharides",
      "Lipids"
    ]
  },
  {
    "numb": 3,
    "question": "The chemical formula for glucose is:",
    "answer": "C6H12O6",
    "options": [
      "C5H10O5",
      "C6H12O6",
      "C12H22O11",
      "(C6H10O5)n"
    ]
  },
  {
    "numb": 4,
    "question": "Which of the following is a disaccharide?",
    "answer": "Sucrose",
    "options": [
      "Glucose",
      "Fructose",
      "Sucrose",
      "Starch"
    ]
  },
  {
    "numb": 5,
    "question": "Sucrose is composed of:",
    "answer": "Glucose and fructose",
    "options": [
      "Glucose and fructose",
      "Glucose and glucose",
      "Glucose and galactose",
      "Fructose and galactose"
    ]
  },
  {
    "numb": 6,
    "question": "Lactose is a disaccharide found in:",
    "answer": "Milk",
    "options": [
      "Fruits",
      "Milk",
      "Grains",
      "Vegetables"
    ]
  },
  {
    "numb": 7,
    "question": "Which of the following is a polysaccharide that serves as a primary energy storage in plants?",
    "answer": "Starch",
    "options": [
      "Cellulose",
      "Glycogen",
      "Starch",
      "Chitin"
    ]
  },
  {
    "numb": 8,
    "question": "The main structural component of plant cell walls is:",
    "answer": "Cellulose",
    "options": [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Chitin"
    ]
  },
  {
    "numb": 9,
    "question": "Glycogen is the storage form of glucose in:",
    "answer": "Animals",
    "options": [
      "Plants",
      "Animals",
      "Fungi",
      "Bacteria"
    ]
  },
  {
    "numb": 10,
    "question": "Chitin is a polysaccharide found in the exoskeleton of insects and the cell walls of:",
    "answer": "Fungi",
    "options": [
      "Plants",
      "Animals",
      "Fungi",
      "Protists"
    ]
  },
  {
    "numb": 11,
    "question": "Lipids are primarily composed of:",
    "answer": "Carbon, hydrogen, and oxygen",
    "options": [
      "Carbon, hydrogen, and oxygen",
      "Carbon, hydrogen, oxygen, and nitrogen",
      "Carbon, hydrogen, oxygen, nitrogen, and phosphorus",
      "Carbon, hydrogen, and nitrogen"
    ]
  },
  {
    "numb": 12,
    "question": "Which of the following is a characteristic of lipids?",
    "answer": "They are hydrophobic.",
    "options": [
      "They are polar molecules.",
      "They are soluble in water.",
      "They are hydrophobic.",
      "They are polymers of monosaccharides."
    ]
  },
  {
    "numb": 13,
    "question": "Triglycerides are composed of:",
    "answer": "One glycerol molecule and three fatty acids",
    "options": [
      "One glycerol molecule and one fatty acid",
      "One glycerol molecule and two fatty acids",
      "One glycerol molecule and three fatty acids",
      "Three glycerol molecules and one fatty acid"
    ]
  },
  {
    "numb": 14,
    "question": "Saturated fatty acids have:",
    "answer": "Single bonds between carbon atoms",
    "options": [
      "Double bonds between carbon atoms",
      "Single bonds between carbon atoms",
      "Triple bonds between carbon atoms",
      "No bonds between carbon atoms"
    ]
  },
  {
    "numb": 15,
    "question": "Unsaturated fatty acids contain:",
    "answer": "One or more double bonds",
    "options": [
      "Only single bonds",
      "One or more double bonds",
      "Only triple bonds",
      "No bonds"
    ]
  },
  {
    "numb": 16,
    "question": "Phospholipids are major components of:",
    "answer": "Cell membranes",
    "options": [
      "Cell walls",
      "Cell membranes",
      "Cytoplasm",
      "Nucleus"
    ]
  },
  {
    "numb": 17,
    "question": "A phospholipid molecule has a:",
    "answer": "Hydrophilic head and a hydrophobic tail",
    "options": [
      "Hydrophilic head and a hydrophobic tail",
      "Hydrophobic head and a hydrophilic tail",
      "Hydrophobic head and a hydrophobic tail",
      "Hydrophilic head and a hydrophilic head"
    ]
  },
  {
    "numb": 18,
    "question": "Steroids are lipids characterized by a carbon skeleton consisting of:",
    "answer": "A ring structure",
    "options": [
      "A long chain",
      "A ring structure",
      "A branched structure",
      "A globular structure"
    ]
  },
  {
    "numb": 19,
    "question": "Cholesterol is an example of a:",
    "answer": "Steroid",
    "options": [
      "Triglyceride",
      "Phospholipid",
      "Steroid",
      "Wax"
    ]
  },
  {
    "numb": 20,
    "question": "Proteins are polymers of:",
    "answer": "Amino acids",
    "options": [
      "Monosaccharides",
      "Fatty acids",
      "Amino acids",
      "Nucleotides"
    ]
  },
  {
    "numb": 21,
    "question": "Amino acids are linked together by:",
    "answer": "Peptide bonds",
    "options": [
      "Glycosidic bonds",
      "Ester bonds",
      "Peptide bonds",
      "Hydrogen bonds"
    ]
  },
  {
    "numb": 22,
    "question": "How many different types of amino acids are commonly found in proteins?",
    "answer": "20",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ]
  },
  {
    "numb": 23,
    "question": "The primary structure of a protein refers to its:",
    "answer": "Sequence of amino acids",
    "options": [
      "Three-dimensional shape",
      "Sequence of amino acids",
      "Local folding patterns like alpha-helices and beta-sheets",
      "Arrangement of multiple polypeptide chains"
    ]
  },
  {
    "numb": 24,
    "question": "Alpha-helices and beta-pleated sheets are examples of a protein's:",
    "answer": "Secondary structure",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ]
  },
  {
    "numb": 25,
    "question": "The overall three-dimensional shape of a polypeptide is its:",
    "answer": "Tertiary structure",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ]
  },
  {
    "numb": 26,
    "question": "The association of multiple polypeptide chains to form a functional protein describes its:",
    "answer": "Quaternary structure",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ]
  },
  {
    "numb": 27,
    "question": "Which of the following factors can affect the shape and function of a protein?",
    "answer": "All of the above",
    "options": [
      "Temperature",
      "pH",
      "Salt concentration",
      "All of the above"
    ]
  },
  {
    "numb": 28,
    "question": "Denaturation of a protein involves the:",
    "answer": "Loss of its three-dimensional shape",
    "options": [
      "Breaking of peptide bonds",
      "Change in the amino acid sequence",
      "Loss of its three-dimensional shape",
      "Formation of new disulfide bridges"
    ]
  },
  {
    "numb": 29,
    "question": "Enzymes are biological catalysts that are primarily:",
    "answer": "Proteins",
    "options": [
      "Carbohydrates",
      "Lipids",
      "Proteins",
      "Nucleic acids"
    ]
  },
  {
    "numb": 30,
    "question": "Nucleic acids are polymers of:",
    "answer": "Nucleotides",
    "options": [
      "Monosaccharides",
      "Fatty acids",
      "Amino acids",
      "Nucleotides"
    ]
  },
  {
    "numb": 31,
    "question": "A nucleotide is composed of:",
    "answer": "A sugar, a phosphate group, and a nitrogenous base",
    "options": [
      "A sugar and a phosphate group",
      "A nitrogenous base and a phosphate group",
      "A sugar and a nitrogenous base",
      "A sugar, a phosphate group, and a nitrogenous base"
    ]
  },
  {
    "numb": 32,
    "question": "The sugar found in DNA is:",
    "answer": "Deoxyribose",
    "options": [
      "Glucose",
      "Ribose",
      "Deoxyribose",
      "Fructose"
    ]
  },
  {
    "numb": 33,
    "question": "The sugar found in RNA is:",
    "answer": "Ribose",
    "options": [
      "Glucose",
      "Ribose",
      "Deoxyribose",
      "Fructose"
    ]
  },
  {
    "numb": 34,
    "question": "Which of the following nitrogenous bases is found in DNA but not in RNA?",
    "answer": "Thymine",
    "options": [
      "Adenine",
      "Guanine",
      "Cytosine",
      "Thymine"
    ]
  },
  {
    "numb": 35,
    "question": "Which of the following nitrogenous bases is found in RNA but not in DNA?",
    "answer": "Uracil",
    "options": [
      "Adenine",
      "Guanine",
      "Cytosine",
      "Uracil"
    ]
  },
  {
    "numb": 36,
    "question": "The nitrogenous bases in DNA pair up as follows:",
    "answer": "Adenine with thymine, cytosine with guanine",
    "options": [
      "Adenine with guanine, cytosine with thymine",
      "Adenine with thymine, cytosine with guanine",
      "Adenine with uracil, cytosine with guanine",
      "Adenine with cytosine, guanine with thymine"
    ]
  },
  {
    "numb": 37,
    "question": "The nitrogenous bases in RNA pair up as follows:",
    "answer": "Adenine with uracil, cytosine with guanine",
    "options": [
      "Adenine with guanine, cytosine with uracil",
      "Adenine with uracil, cytosine with guanine",
      "Adenine with thymine, cytosine with guanine",
      "Adenine with cytosine, guanine with uracil"
    ]
  },
  {
    "numb": 38,
    "question": "DNA primarily functions in:",
    "answer": "Genetic information storage",
    "options": [
      "Protein synthesis",
      "Energy storage",
      "Genetic information storage",
      "Catalyzing biological reactions"
    ]
  },
  {
    "numb": 39,
    "question": "RNA primarily functions in:",
    "answer": "Protein synthesis",
    "options": [
      "Genetic information storage",
      "Energy storage",
      "Protein synthesis",
      "Structural support"
    ]
  },
  {
    "numb": 40,
    "question": "ATP (adenosine triphosphate) is a:",
    "answer": "Nucleotide",
    "options": [
      "Carbohydrate",
      "Lipid",
      "Protein",
      "Nucleotide"
    ]
  },
  {
    "numb": 41,
    "question": "ATP is the main:",
    "answer": "Energy currency of the cell",
    "options": [
      "Structural component of the cell membrane",
      "Energy currency of the cell",
      "Genetic material of the cell",
      "Catalyst of cellular reactions"
    ]
  },
  {
    "numb": 42,
    "question": "The bond that releases energy when ATP is hydrolyzed is between:",
    "answer": "The second and third phosphate groups",
    "options": [
      "The sugar and the base",
      "The sugar and the first phosphate group",
      "The first and second phosphate groups",
      "The second and third phosphate groups"
    ]
  },
  {
    "numb": 43,
    "question": "Which of the following is a major function of carbohydrates in living organisms?",
    "answer": "Providing structural support and energy",
    "options": [
      "Catalyzing chemical reactions",
      "Storing genetic information",
      "Providing structural support and energy",
      "Transporting oxygen"
    ]
  },
  {
    "numb": 44,
    "question": "Which of the following is a major function of lipids in living organisms?",
    "answer": "Providing insulation and energy storage",
    "options": [
      "Speeding up biochemical reactions",
      "Forming the genetic code",
      "Providing insulation and energy storage",
      "Building muscle tissue"
    ]
  },
  {
    "numb": 45,
    "question": "Which of the following is a major function of proteins in living organisms?",
    "answer": "Catalyzing reactions, providing structure, and transport",
    "options": [
      "Storing energy for long-term use",
      "Forming the primary structure of cell walls",
      "Catalyzing reactions, providing structure, and transport",
      "Transmitting genetic information"
    ]
  },
  {
    "numb": 46,
    "question": "Which of the following is a major function of nucleic acids in living organisms?",
    "answer": "Storing and transmitting genetic information",
    "options": [
      "Providing a quick source of energy",
      "Forming the main component of cell membranes",
      "Storing and transmitting genetic information",
      "Catalyzing metabolic processes"
    ]
  },
  {
    "numb": 47,
    "question": "The process of joining monosaccharides to form polysaccharides involves the removal of a molecule of water. This is called:",
    "answer": "Dehydration synthesis",
    "options": [
      "Hydrolysis",
      "Dehydration synthesis",
      "Oxidation",
      "Reduction"
    ]
  },
  {
    "numb": 48,
    "question": "The breakdown of polysaccharides into monosaccharides involves the addition of a molecule of water. This is called:",
    "answer": "Hydrolysis",
    "options": [
      "Dehydration synthesis",
      "Hydrolysis",
      "Polymerization",
      "Condensation"
    ]
  },
  {
    "numb": 49,
    "question": "A group of similar species is called:",
    "answer": "Genus",
    "options": [
      "Class",
      "Genus",
      "Order",
      "Family"
    ]
  },
  {
    "numb": 50,
    "question": "Which classification level comes after class?",
    "answer": "Order",
    "options": [
      "Order",
      "Family",
      "Genus",
      "Species"
    ]
  },
  {
    "numb": 51,
    "question": "A well-tested and widely accepted hypothesis becomes a:",
    "answer": "Theory",
    "options": [
      "Theory",
      "Fact",
      "Observation",
      "Law"
    ]
  },
  {
    "numb": 52,
    "question": "The study of the environment and how organisms interact with it is called:",
    "answer": "Ecology",
    "options": [
      "Ecology",
      "Botany",
      "Zoology",
      "Anatomy"
    ]
  },
  {
    "numb": 53,
    "question": "Biology is the study of:",
    "answer": "Living organisms",
    "options": [
      "Non-living things",
      "Minerals",
      "Living organisms",
      "Chemicals"
    ]
  },
  {
    "numb": 54,
    "question": "Which branch of biology deals with the study of plants?",
    "answer": "Botany",
    "options": [
      "Zoology",
      "Botany",
      "Ecology",
      "Mycology"
    ]
  },
  {
    "numb": 55,
    "question": "Zoology is the study of:",
    "answer": "Animals",
    "options": [
      "Plants",
      "Fungi",
      "Animals",
      "Microbes"
    ]
  },
  {
    "numb": 56,
    "question": "Which field of biology involves the study of cell structure?",
    "answer": "Cytology",
    "options": [
      "Histology",
      "Cytology",
      "Physiology",
      "Embryology"
    ]
  },
  {
    "numb": 57,
    "question": "The branch of biology that deals with functions of living organisms is:",
    "answer": "Physiology",
    "options": [
      "Ecology",
      "Anatomy",
      "Physiology",
      "Taxonomy"
    ]
  },
  {
    "numb": 58,
    "question": "The scientific method begins with:",
    "answer": "Observation",
    "options": [
      "Hypothesis",
      "Experimentation",
      "Observation",
      "Theory"
    ]
  },
  {
    "numb": 59,
    "question": "Which step comes after making a hypothesis in scientific method?",
    "answer": "Experimentation",
    "options": [
      "Observation",
      "Experimentation",
      "Theory",
      "Conclusion"
    ]
  },
  {
    "numb": 60,
    "question": "The correct sequence of steps in scientific method is:",
    "answer": "Observation → Hypothesis → Experiment → Conclusion",
    "options": [
      "Experiment → Observation → Hypothesis → Conclusion",
      "Observation → Hypothesis → Experiment → Conclusion",
      "Conclusion → Hypothesis → Observation → Experiment",
      "Observation → Experiment → Hypothesis → Conclusion"
    ]
  },
  {
    "numb": 61,
    "question": "What is the function of a control in an experiment?",
    "answer": "To provide a comparison",
    "options": [
      "To introduce error",
      "To provide a comparison",
      "To confuse variables",
      "To repeat the experiment"
    ]
  },
  {
    "numb": 62,
    "question": "The classification of organisms is known as:",
    "answer": "Taxonomy",
    "options": [
      "Anatomy",
      "Taxonomy",
      "Biochemistry",
      "Embryology"
    ]
  },
  {
    "numb": 63,
    "question": "Which kingdom includes multicellular, photosynthetic organisms?",
    "answer": "Plantae",
    "options": [
      "Animalia",
      "Fungi",
      "Plantae",
      "Protista"
    ]
  },
  {
    "numb": 64,
    "question": "Binomial nomenclature was introduced by:",
    "answer": "Carl Linnaeus",
    "options": [
      "Charles Darwin",
      "Aristotle",
      "Carl Linnaeus",
      "Gregor Mendel"
    ]
  },
  {
    "numb": 65,
    "question": "In binomial nomenclature, the first word represents:",
    "answer": "Genus",
    "options": [
      "Species",
      "Genus",
      "Family",
      "Order"
    ]
  },
  {
    "numb": 66,
    "question": "The second word in binomial nomenclature represents:",
    "answer": "Species",
    "options": [
      "Class",
      "Family",
      "Species",
      "Genus"
    ]
  },
  {
    "numb": 67,
    "question": "Which kingdom includes bacteria?",
    "answer": "Monera",
    "options": [
      "Protista",
      "Monera",
      "Fungi",
      "Animalia"
    ]
  },
  {
    "numb": 68,
    "question": "The five kingdom classification was proposed by:",
    "answer": "Robert Whittaker",
    "options": [
      "Carl Linnaeus",
      "Robert Whittaker",
      "Aristotle",
      "Haeckel"
    ]
  },
  {
    "numb": 69,
    "question": "What does the term 'organism' refer to?",
    "answer": "An individual living thing",
    "options": [
      "A non-living object",
      "A group of cells",
      "An individual living thing",
      "A species"
    ]
  },
  {
    "numb": 70,
    "question": "The process of converting light energy into chemical energy is called:",
    "answer": "Photosynthesis",
    "options": [
      "Respiration",
      "Fermentation",
      "Photosynthesis",
      "Excretion"
    ]
  },
  {
    "numb": 71,
    "question": "Which of the following is a characteristic of life?",
    "answer": "Ability to reproduce",
    "options": [
      "Ability to reproduce",
      "Inability to adapt",
      "Being immobile",
      "Lack of organization"
    ]
  },
  {
    "numb": 72,
    "question": "The building blocks of proteins are:",
    "answer": "Amino acids",
    "options": [
      "Amino acids",
      "Sugars",
      "Fatty acids",
      "Nucleotides"
    ]
  },
  {
    "numb": 73,
    "question": "The study of heredity is known as:",
    "answer": "Genetics",
    "options": [
      "Genetics",
      "Evolution",
      "Cytology",
      "Ecology"
    ]
  },
  {
    "numb": 74,
    "question": "Which of the following is not a domain of life?",
    "answer": "Monera",
    "options": [
      "Bacteria",
      "Archaea",
      "Eukarya",
      "Monera"
    ]
  },
  {
    "numb": 75,
    "question": "Which of the following is a unicellular organism?",
    "answer": "Bacteria",
    "options": [
      "Bacteria",
      "Mushrooms",
      "Fungi",
      "Algae"
    ]
  },
  {
    "numb": 76,
    "question": "The process of cellular respiration occurs in the:",
    "answer": "Mitochondria",
    "options": [
      "Nucleus",
      "Cytoplasm",
      "Mitochondria",
      "Ribosomes"
    ]
  },
  {
    "numb": 77,
    "question": "Which of the following is true about enzymes?",
    "answer": "They speed up chemical reactions",
    "options": [
      "They speed up chemical reactions",
      "They slow down chemical reactions",
      "They are not reusable",
      "They are only found in plants"
    ]
  },
  {
    "numb": 78,
    "question": "Which of these is a product of photosynthesis?",
    "answer": "Oxygen",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Glucose",
      "Water"
    ]
  },
  {
    "numb": 79,
    "question": "What does DNA stand for?",
    "answer": "Deoxyribonucleic acid",
    "options": [
      "Deoxyribonucleic acid",
      "Ribonucleic acid",
      "Deoxyribonucleic substance",
      "Nucleic acid"
    ]
  },
  {
    "numb": 80,
    "question": "Which type of RNA carries the genetic information?",
    "answer": "mRNA",
    "options": [
      "tRNA",
      "mRNA",
      "rRNA",
      "sRNA"
    ]
  },
  {
    "numb": 81,
    "question": "Which of the following is an organelle that is responsible for protein synthesis?",
    "answer": "Ribosomes",
    "options": [
      "Mitochondria",
      "Ribosomes",
      "Nucleus",
      "Golgi apparatus"
    ]
  },
  {
    "numb": 82,
    "question": "Which of these is not part of the cell theory?",
    "answer": "All cells have the same function",
    "options": [
      "All living organisms are made of cells",
      "The cell is the basic unit of life",
      "All cells come from pre-existing cells",
      "All cells have the same function"
    ]
  },
  {
    "numb": 83,
    "question": "Which of the following is responsible for controlling the cell's activities?",
    "answer": "Nucleus",
    "options": [
      "Mitochondria",
      "Ribosomes",
      "Nucleus",
      "Endoplasmic reticulum"
    ]
  },
  {
    "numb": 84,
    "question": "What is the main function of the chloroplast?",
    "answer": "Photosynthesis",
    "options": [
      "Protein synthesis",
      "Energy production",
      "Photosynthesis",
      "Transport of materials"
    ]
  },
  {
    "numb": 85,
    "question": "What is the primary function of the cell membrane?",
    "answer": "Regulate what enters and exits the cell",
    "options": [
      "Provide energy",
      "Regulate what enters and exits the cell",
      "Maintain cell shape",
      "Produce proteins"
    ]
  },
  {
    "numb": 86,
    "question": "Which of the following is a characteristic of prokaryotic cells?",
    "answer": "Lack of membrane-bound organelles",
    "options": [
      "Lack of membrane-bound organelles",
      "Presence of a nucleus",
      "Presence of mitochondria",
      "Presence of chloroplasts"
    ]
  },
  {
    "numb": 87,
    "question": "Which process involves the movement of molecules from an area of high concentration to an area of low concentration?",
    "answer": "Diffusion",
    "options": [
      "Osmosis",
      "Diffusion",
      "Active transport",
      "Endocytosis"
    ]
  },
  {
    "numb": 88,
    "question": "Which of the following is a type of passive transport?",
    "answer": "Diffusion",
    "options": [
      "Diffusion",
      "Active transport",
      "Phagocytosis",
      "Exocytosis"
    ]
  },
  {
    "numb": 89,
    "question": "What is the term for the diffusion of water across a semipermeable membrane?",
    "answer": "Osmosis",
    "options": [
      "Diffusion",
      "Active transport",
      "Osmosis",
      "Facilitated diffusion"
    ]
  },
  {
    "numb": 90,
    "question": "Which of the following processes requires energy input?",
    "answer": "Active transport",
    "options": [
      "Osmosis",
      "Diffusion",
      "Active transport",
      "Facilitated diffusion"
    ]
  },
  {
    "numb": 91,
    "question": "Which process is responsible for the production of ATP in cells?",
    "answer": "Cellular respiration",
    "options": [
      "Photosynthesis",
      "Cellular respiration",
      "Fermentation",
      "Transcription"
    ]
  },
  {
    "numb": 92,
    "question": "What is the function of the Golgi apparatus?",
    "answer": "Modify, sort, and package proteins",
    "options": [
      "Produce energy",
      "Modify, sort, and package proteins",
      "Control the cell's activities",
      "Store genetic information"
    ]
  },
  {
    "numb": 93,
    "question": "Which of these structures is found in both plant and animal cells?",
    "answer": "Nucleus",
    "options": [
      "Chloroplast",
      "Cell wall",
      "Nucleus",
      "Vacuole"
    ]
  },
  {
    "numb": 94,
    "question": "What type of bond holds the two strands of a DNA molecule together?",
    "answer": "Hydrogen bonds",
    "options": [
      "Ionic bonds",
      "Covalent bonds",
      "Hydrogen bonds",
      "Disulfide bonds"
    ]
  },
  {
    "numb": 95,
    "question": "Which of the following is a characteristic of eukaryotic cells?",
    "answer": "Presence of membrane-bound organelles",
    "options": [
      "Lack of a nucleus",
      "Presence of membrane-bound organelles",
      "Smaller than prokaryotic cells",
      "Single-celled organisms only"
    ]
  },
  {
    "numb": 96,
    "question": "Which molecule is produced as a byproduct of cellular respiration?",
    "answer": "Carbon dioxide",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Water",
      "Glucose"
    ]
  },
  {
    "numb": 97,
    "question": "Which of the following is NOT a phase of the cell cycle?",
    "answer": "Mitosis",
    "options": [
      "Interphase",
      "Prophase",
      "Mitosis",
      "Telophase"
    ]
  },
  {
    "numb": 98,
    "question": "Which of the following is a main function of the lysosomes?",
    "answer": "Digest cellular waste",
    "options": [
      "Synthesizing proteins",
      "Transporting molecules",
      "Digesting cellular waste",
      "Regulating the cell cycle"
    ]
  },
  {
    "numb": 99,
    "question": "Which of the following is true about the ribosomes?",
    "answer": "They are involved in protein synthesis",
    "options": [
      "They are involved in protein synthesis",
      "They store genetic information",
      "They are responsible for cell division",
      "They are found only in animal cells"
    ]
  },
  {
    "numb": 100,
    "question": "The process by which cells divide to form two identical daughter cells is called:",
    "answer": "Mitosis",
    "options": [
      "Meiosis",
      "Mitosis",
      "Binary fission",
      "Cell differentiation"
    ]
  }
  
  


  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
