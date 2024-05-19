const data = [
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.02, indexNumber: 1},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.01, indexNumber: 3},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 4},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0113, indexNumber: 5},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.042, indexNumber: 6},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.033, indexNumber: 9},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0112, indexNumber: 10},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.043, indexNumber: 13},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03202, indexNumber: 14},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0111, indexNumber: 15},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.043, indexNumber: 16},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.035, indexNumber: 19},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0117, indexNumber: 20},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 22},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.039, indexNumber: 25},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 29},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.046, indexNumber: 32},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.034, indexNumber: 36},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0101, indexNumber: 39},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 40},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.032, indexNumber: 42},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 43},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.043, indexNumber: 46},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 49},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 51},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 52},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.033, indexNumber: 53},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 56},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 62},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 64},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 66},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 67},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 69},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 72},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 76},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.01781, indexNumber: 79},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0654, indexNumber: 80},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 88},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0111, indexNumber: 89},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0423, indexNumber: 96},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.03322, indexNumber: 99},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 100},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.044, indexNumber: 105},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03327, indexNumber: 106},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.01231, indexNumber: 108},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.045, indexNumber: 110},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.03232, indexNumber: 112},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 115},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 139},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0423, indexNumber: 142},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.03, indexNumber: 143},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0115, indexNumber: 144},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 152},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.033, indexNumber: 153},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0112, indexNumber: 156},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 162},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0323, indexNumber: 164},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 166},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 167},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0112, indexNumber: 169},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0432, indexNumber: 172},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0356, indexNumber: 176},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.01134, indexNumber: 179},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.042, indexNumber: 180},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.032, indexNumber: 188},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0151, indexNumber: 189},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0423, indexNumber: 196},
    {category: "Pajamos be kategorijos ", receiver:'INTERACTIVE BROKERS', percent: 0.0326, indexNumber: 199},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.0151, indexNumber: 200},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.044, indexNumber: 205},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.037, indexNumber: 206},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.013, indexNumber: 208},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.045, indexNumber: 210},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.032, indexNumber: 212},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.011, indexNumber: 215},
    {category: "Pajamos be kategorijos", receiver: 'INTERACTIVE BROKERS', percent: 0.04, indexNumber: 239},
];

export default data;