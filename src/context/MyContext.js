import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myWeather, setMyWeather] = useState({
    cond0: undefined,
    min0: undefined,
    max0: undefined,
    cond1: undefined,
    min1: undefined,
    max1: undefined,
    cond2: undefined,
    min2: undefined,
    max2: undefined,
    cond3: undefined,
    min3: undefined,
    max3: undefined,
    cond4: undefined,
    min4: undefined,
    max4: undefined,
    cond5: undefined,
    min5: undefined,
    max5: undefined,
    cond6: undefined,
    min6: undefined,
    max6: undefined,
    cond7: undefined,
    min7: undefined,
    max7: undefined,
  });

  const cities = [
  {
    "plaka": 1,
    "name": "ADANA",
    "lat": 37,
    "long": 35.3213333,
    "northeast_lat": 37.072004,
    "northeast_long": 35.461995,
    "southwest_lat": 36.935523,
    "southwest_long": 35.174706
  },
  {
    "plaka": 2,
    "name": "ADIYAMAN",
    "lat": 37.7641667,
    "long": 38.2761667,
    "northeast_lat": 37.825667,
    "northeast_long": 38.335465,
    "southwest_lat": 37.717086,
    "southwest_long": 38.188188
  },
  {
    "plaka": 3,
    "name": "AFYONKARAHİSAR",
    "lat": 38.76376,
    "long": 30.54034,
    "northeast_lat": 38.802105,
    "northeast_long": 30.611167,
    "southwest_lat": 38.714289,
    "southwest_long": 30.44232
  },
  {
    "plaka": 4,
    "name": "AĞRI",
    "lat": 39.7216667,
    "long": 43.0566667,
    "northeast_lat": 39.748605,
    "northeast_long": 43.085241,
    "southwest_lat": 39.688144,
    "southwest_long": 43.001778
  },
  {
    "plaka": 5,
    "name": "AMASYA",
    "lat": 40.65,
    "long": 35.8333333,
    "northeast_lat": 40.672834,
    "northeast_long": 35.856321,
    "southwest_lat": 40.636911,
    "southwest_long": 35.789091
  },
  {
    "plaka": 6,
    "name": "ANKARA",
    "lat": 39.92077,
    "long": 32.85411,
    "northeast_lat": 40.100981,
    "northeast_long": 33.024866,
    "southwest_lat": 39.722821,
    "southwest_long": 32.499097
  },
  {
    "plaka": 7,
    "name": "ANTALYA",
    "lat": 36.88414,
    "long": 30.70563,
    "northeast_lat": 36.975178,
    "northeast_long": 30.840953,
    "southwest_lat": 36.785866,
    "southwest_long": 30.516095
  },
  {
    "plaka": 8,
    "name": "ARTVİN",
    "lat": 41.1833333,
    "long": 41.8166667,
    "northeast_lat": 41.207078,
    "northeast_long": 41.854799,
    "southwest_lat": 41.155415,
    "southwest_long": 41.777361
  },
  {
    "plaka": 9,
    "name": "AYDIN",
    "lat": 37.8444,
    "long": 27.8458,
    "northeast_lat": 37.870997,
    "northeast_long": 27.885355,
    "southwest_lat": 37.819573,
    "southwest_long": 27.790522
  },
  {
    "plaka": 10,
    "name": "BALIKESİR",
    "lat": 39.648369,
    "long": 27.88261,
    "northeast_lat": 39.693666,
    "northeast_long": 27.95241,
    "southwest_lat": 39.612411,
    "southwest_long": 27.838313
  },
  {
    "plaka": 11,
    "name": "BİLECİK",
    "lat": 40.150131,
    "long": 29.983061,
    "northeast_lat": 40.197617,
    "northeast_long": 30.013592,
    "southwest_lat": 40.106243,
    "southwest_long": 29.956657
  },
  {
    "plaka": 12,
    "name": "BİNGÖL",
    "lat": 38.885349,
    "long": 40.498291,
    "northeast_lat": 38.897963,
    "northeast_long": 40.525929,
    "southwest_lat": 38.872987,
    "southwest_long": 40.477258
  },
  {
    "plaka": 13,
    "name": "BİTLİS",
    "lat": 38.4,
    "long": 42.1166667,
    "northeast_lat": 38.453638,
    "northeast_long": 42.148879,
    "southwest_lat": 38.385312,
    "southwest_long": 42.09384
  },
  {
    "plaka": 14,
    "name": "BOLU",
    "lat": 40.739479,
    "long": 31.611561,
    "northeast_lat": 40.758004,
    "northeast_long": 31.658418,
    "southwest_lat": 40.716802,
    "southwest_long": 31.573324
  },
  {
    "plaka": 15,
    "name": "BURDUR",
    "lat": 37.726909,
    "long": 30.288876,
    "northeast_lat": 37.76375,
    "northeast_long": 30.336662,
    "southwest_lat": 37.691433,
    "southwest_long": 30.191757
  },
  {
    "plaka": 16,
    "name": "BURSA",
    "lat": 40.18257,
    "long": 29.06687,
    "northeast_lat": 40.297194,
    "northeast_long": 29.211237,
    "southwest_lat": 40.162997,
    "southwest_long": 28.85963
  },
  {
    "plaka": 17,
    "name": "ÇANAKKALE",
    "lat": 40.155312,
    "long": 26.41416,
    "northeast_lat": 40.199462,
    "northeast_long": 26.457106,
    "southwest_lat": 40.088086,
    "southwest_long": 26.378026
  },
  {
    "plaka": 18,
    "name": "ÇANKIRI",
    "lat": 40.6,
    "long": 33.6166667,
    "northeast_lat": 40.655159,
    "northeast_long": 33.684853,
    "southwest_lat": 40.557709,
    "southwest_long": 33.596571
  },
  {
    "plaka": 19,
    "name": "ÇORUM",
    "lat": 40.5505556,
    "long": 34.9555556,
    "northeast_lat": 40.609317,
    "northeast_long": 35.006438,
    "southwest_lat": 40.495214,
    "southwest_long": 34.887634
  },
  {
    "plaka": 20,
    "name": "DENİZLİ",
    "lat": 37.77652,
    "long": 29.08639,
    "northeast_lat": 37.847366,
    "northeast_long": 29.188915,
    "southwest_lat": 37.716171,
    "southwest_long": 28.981373
  },
  {
    "plaka": 21,
    "name": "DİYARBAKIR",
    "lat": 37.91441,
    "long": 40.230629,
    "northeast_lat": 37.976174,
    "northeast_long": 40.245803,
    "southwest_lat": 37.879624,
    "southwest_long": 40.106159
  },
  {
    "plaka": 22,
    "name": "EDİRNE",
    "lat": 41.6666667,
    "long": 26.5666667,
    "northeast_lat": 41.697939,
    "northeast_long": 26.603093,
    "southwest_lat": 41.649935,
    "southwest_long": 26.514059
  },
  {
    "plaka": 23,
    "name": "ELAZIĞ",
    "lat": 38.680969,
    "long": 39.226398,
    "northeast_lat": 38.713568,
    "northeast_long": 39.277314,
    "southwest_lat": 38.630564,
    "southwest_long": 39.133405
  },
  {
    "plaka": 24,
    "name": "ERZİNCAN",
    "lat": 39.75,
    "long": 39.5,
    "northeast_lat": 39.769164,
    "northeast_long": 39.531743,
    "southwest_lat": 39.729884,
    "southwest_long": 39.460253
  },
  {
    "plaka": 25,
    "name": "ERZURUM",
    "lat": 39.9043189,
    "long": 41.2678853,
    "northeast_lat": 39.954533,
    "northeast_long": 41.303594,
    "southwest_lat": 39.866715,
    "southwest_long": 41.177093
  },
  {
    "plaka": 26,
    "name": "ESKİŞEHİR",
    "lat": 39.784302,
    "long": 30.51922,
    "northeast_lat": 39.816793,
    "northeast_long": 30.66769,
    "southwest_lat": 39.724752,
    "southwest_long": 30.414084
  },
  {
    "plaka": 27,
    "name": "GAZİANTEP",
    "lat": 37.06622,
    "long": 37.38332,
    "northeast_lat": 37.113722,
    "northeast_long": 37.466958,
    "southwest_lat": 37.005947,
    "southwest_long": 37.303709
  },
  {
    "plaka": 28,
    "name": "GİRESUN",
    "lat": 40.912811,
    "long": 38.38953,
    "northeast_lat": 40.927995,
    "northeast_long": 38.450044,
    "southwest_lat": 40.877876,
    "southwest_long": 38.309018
  },
  {
    "plaka": 29,
    "name": "GÜMÜŞHANE",
    "lat": 40.4602778,
    "long": 39.4813889,
    "northeast_lat": 40.471359,
    "northeast_long": 39.520641,
    "southwest_lat": 40.430201,
    "southwest_long": 39.446914
  },
  {
    "plaka": 30,
    "name": "HAKKARİ",
    "lat": 37.5833333,
    "long": 43.7333333,
    "northeast_lat": 37.601656,
    "northeast_long": 43.762257,
    "southwest_lat": 37.551549,
    "southwest_long": 43.69809
  },
  {
    "plaka": 31,
    "name": "HATAY",
    "lat": 36.4018488,
    "long": 36.3498097,
    "northeast_lat": 37.014921,
    "northeast_long": 36.697535,
    "southwest_lat": 35.812692,
    "southwest_long": 35.779375
  },
  {
    "plaka": 32,
    "name": "ISPARTA",
    "lat": 37.7666667,
    "long": 30.55,
    "northeast_lat": 37.830719,
    "northeast_long": 30.609197,
    "southwest_lat": 37.73988,
    "southwest_long": 30.503673
  },
  {
    "plaka": 33,
    "name": "MERSİN(İÇEL)",
    "lat": 36.8,
    "long": 34.6333333,
    "northeast_lat": 36.878272,
    "northeast_long": 34.716702,
    "southwest_lat": 36.699503,
    "southwest_long": 34.457655
  },
  {
    "plaka": 34,
    "name": "İSTANBUL",
    "lat": 41.00527,
    "long": 28.97696,
    "northeast_lat": 41.320786,
    "northeast_long": 29.456456,
    "southwest_lat": 40.80275,
    "southwest_long": 27.971307
  },
  {
    "plaka": 35,
    "name": "İZMİR",
    "lat": 38.41885,
    "long": 27.12872,
    "northeast_lat": 38.506773,
    "northeast_long": 27.304415,
    "southwest_lat": 38.343157,
    "southwest_long": 27.017192
  },
  {
    "plaka": 36,
    "name": "KARS",
    "lat": 40.59267,
    "long": 43.077831,
    "northeast_lat": 40.624843,
    "northeast_long": 43.1339,
    "southwest_lat": 40.577484,
    "southwest_long": 43.056432
  },
  {
    "plaka": 37,
    "name": "KASTAMONU",
    "lat": 41.38871,
    "long": 33.78273,
    "northeast_lat": 41.436059,
    "northeast_long": 33.814989,
    "southwest_lat": 41.350668,
    "southwest_long": 33.752901
  },
  {
    "plaka": 38,
    "name": "KAYSERİ",
    "lat": 38.7333333,
    "long": 35.4833333,
    "northeast_lat": 38.818797,
    "northeast_long": 35.627675,
    "southwest_lat": 38.622002,
    "southwest_long": 35.304324
  },
  {
    "plaka": 39,
    "name": "KIRKLARELİ",
    "lat": 41.7333333,
    "long": 27.2166667,
    "northeast_lat": 41.760054,
    "northeast_long": 27.24222,
    "southwest_lat": 41.710615,
    "southwest_long": 27.182843
  },
  {
    "plaka": 40,
    "name": "KIRŞEHİR",
    "lat": 39.15,
    "long": 34.1666667,
    "northeast_lat": 39.203939,
    "northeast_long": 34.217743,
    "southwest_lat": 39.081293,
    "southwest_long": 34.125532
  },
  {
    "plaka": 41,
    "name": "KOCAELİ",
    "lat": 40.8532704,
    "long": 29.8815203,
    "northeast_lat": 41.20976,
    "northeast_long": 30.359684,
    "southwest_lat": 40.532782,
    "southwest_long": 29.333462
  },
  {
    "plaka": 42,
    "name": "KONYA",
    "lat": 37.8666667,
    "long": 32.4833333,
    "northeast_lat": 38.05063,
    "northeast_long": 32.680116,
    "southwest_lat": 37.719031,
    "southwest_long": 32.338737
  },
  {
    "plaka": 43,
    "name": "KÜTAHYA",
    "lat": 39.4166667,
    "long": 29.9833333,
    "northeast_lat": 39.442718,
    "northeast_long": 30.066503,
    "southwest_lat": 39.379473,
    "southwest_long": 29.919199
  },
  {
    "plaka": 44,
    "name": "MALATYA",
    "lat": 38.35519,
    "long": 38.30946,
    "northeast_lat": 38.397559,
    "northeast_long": 38.453244,
    "southwest_lat": 38.305123,
    "southwest_long": 38.232622
  },
  {
    "plaka": 45,
    "name": "MANİSA",
    "lat": 38.619099,
    "long": 27.428921,
    "northeast_lat": 38.642289,
    "northeast_long": 27.487976,
    "southwest_lat": 38.602376,
    "southwest_long": 27.326086
  },
  {
    "plaka": 46,
    "name": "KAHRAMANMARAŞ",
    "lat": 37.5833333,
    "long": 36.9333333,
    "northeast_lat": 37.605261,
    "northeast_long": 36.997678,
    "southwest_lat": 37.530309,
    "southwest_long": 36.829703
  },
  {
    "plaka": 47,
    "name": "MARDİN",
    "lat": 37.3122361,
    "long": 40.735112,
    "northeast_lat": 37.330554,
    "northeast_long": 40.764486,
    "southwest_lat": 37.305109,
    "southwest_long": 40.716971
  },
  {
    "plaka": 48,
    "name": "MUĞLA",
    "lat": 37.2152778,
    "long": 28.3636111,
    "northeast_lat": 37.22581,
    "northeast_long": 28.414498,
    "southwest_lat": 37.194651,
    "southwest_long": 28.341279
  },
  {
    "plaka": 49,
    "name": "MUŞ",
    "lat": 38.7432926,
    "long": 41.5064823,
    "northeast_lat": 38.783503,
    "northeast_long": 41.540625,
    "southwest_lat": 38.718224,
    "southwest_long": 41.472306
  },
  {
    "plaka": 50,
    "name": "NEVŞEHİR",
    "lat": 38.62442,
    "long": 34.723969,
    "northeast_lat": 38.684107,
    "northeast_long": 34.764759,
    "southwest_lat": 38.589047,
    "southwest_long": 34.669752
  },
  {
    "plaka": 51,
    "name": "NİĞDE",
    "lat": 37.9666667,
    "long": 34.6833333,
    "northeast_lat": 37.979913,
    "northeast_long": 34.691585,
    "southwest_lat": 37.956992,
    "southwest_long": 34.661906
  },
  {
    "plaka": 52,
    "name": "ORDU",
    "lat": 40.9833333,
    "long": 37.8833333,
    "northeast_lat": 41.02034,
    "northeast_long": 37.978976,
    "southwest_lat": 40.931631,
    "southwest_long": 37.825992
  },
  {
    "plaka": 53,
    "name": "RİZE",
    "lat": 41.02005,
    "long": 40.523449,
    "northeast_lat": 41.046492,
    "northeast_long": 40.586802,
    "southwest_lat": 41.010782,
    "southwest_long": 40.478578
  },
  {
    "plaka": 54,
    "name": "SAKARYA",
    "lat": 40.7568793,
    "long": 30.378138,
    "northeast_lat": 40.825518,
    "northeast_long": 30.439832,
    "southwest_lat": 40.686199,
    "southwest_long": 30.322138
  },
  {
    "plaka": 55,
    "name": "SAMSUN",
    "lat": 41.292782,
    "long": 36.33128,
    "northeast_lat": 41.344134,
    "northeast_long": 36.381205,
    "southwest_lat": 41.235002,
    "southwest_long": 36.249519
  },
  {
    "plaka": 56,
    "name": "SİİRT",
    "lat": 37.94429,
    "long": 41.93288,
    "northeast_lat": 37.95594,
    "northeast_long": 41.963658,
    "southwest_lat": 37.909671,
    "southwest_long": 41.872547
  },
  {
    "plaka": 57,
    "name": "SİNOP",
    "lat": 42.0264222,
    "long": 35.1550745,
    "northeast_lat": 42.032135,
    "northeast_long": 35.194947,
    "southwest_lat": 42.012675,
    "southwest_long": 35.115957
  },
  {
    "plaka": 58,
    "name": "SİVAS",
    "lat": 39.747662,
    "long": 37.017879,
    "northeast_lat": 39.783669,
    "northeast_long": 37.061673,
    "southwest_lat": 39.699024,
    "southwest_long": 36.919858
  },
  {
    "plaka": 59,
    "name": "TEKİRDAĞ",
    "lat": 40.9833333,
    "long": 27.5166667,
    "northeast_lat": 40.996723,
    "northeast_long": 27.600252,
    "southwest_lat": 40.937704,
    "southwest_long": 27.468993
  },
  {
    "plaka": 60,
    "name": "TOKAT",
    "lat": 40.3166667,
    "long": 36.55,
    "northeast_lat": 40.358932,
    "northeast_long": 36.593219,
    "southwest_lat": 40.267868,
    "southwest_long": 36.469662
  },
  {
    "plaka": 61,
    "name": "TRABZON",
    "lat": 41,
    "long": 39.7333333,
    "northeast_lat": 41.01237,
    "northeast_long": 39.82051,
    "southwest_lat": 40.955736,
    "southwest_long": 39.652407
  },
  {
    "plaka": 62,
    "name": "TUNCELİ",
    "lat": 39.1079868,
    "long": 39.5401672,
    "northeast_lat": 39.113477,
    "northeast_long": 39.55185,
    "southwest_lat": 39.094534,
    "southwest_long": 39.530015
  },
  {
    "plaka": 63,
    "name": "ŞANLIURFA",
    "lat": 37.15,
    "long": 38.8,
    "northeast_lat": 37.189639,
    "northeast_long": 38.840876,
    "southwest_lat": 37.098274,
    "southwest_long": 38.767868
  },
  {
    "plaka": 64,
    "name": "UŞAK",
    "lat": 38.682301,
    "long": 29.40819,
    "northeast_lat": 38.71588,
    "northeast_long": 29.469838,
    "southwest_lat": 38.630679,
    "southwest_long": 29.355936
  },
  {
    "plaka": 65,
    "name": "VAN",
    "lat": 38.4941667,
    "long": 43.38,
    "northeast_lat": 38.580314,
    "northeast_long": 43.455356,
    "southwest_lat": 38.42188,
    "southwest_long": 43.269524
  },
  {
    "plaka": 66,
    "name": "YOZGAT",
    "lat": 39.82,
    "long": 34.8044444,
    "northeast_lat": 39.838423,
    "northeast_long": 34.858236,
    "southwest_lat": 39.798968,
    "southwest_long": 34.771094
  },
  {
    "plaka": 67,
    "name": "ZONGULDAK",
    "lat": 41.456409,
    "long": 31.798731,
    "northeast_lat": 41.480784,
    "northeast_long": 31.874425,
    "southwest_lat": 41.425296,
    "southwest_long": 31.757052
  },
  {
    "plaka": 68,
    "name": "AKSARAY",
    "lat": 38.36869,
    "long": 34.03698,
    "northeast_lat": 38.446724,
    "northeast_long": 34.088698,
    "southwest_lat": 38.297012,
    "southwest_long": 33.932515
  },
  {
    "plaka": 69,
    "name": "BAYBURT",
    "lat": 40.255169,
    "long": 40.22488,
    "northeast_lat": 40.272636,
    "northeast_long": 40.238261,
    "southwest_lat": 40.242881,
    "southwest_long": 40.208762
  },
  {
    "plaka": 70,
    "name": "KARAMAN",
    "lat": 37.17593,
    "long": 33.228748,
    "northeast_lat": 37.229373,
    "northeast_long": 33.334244,
    "southwest_lat": 37.148257,
    "southwest_long": 33.166003
  },
  {
    "plaka": 71,
    "name": "KIRIKKALE",
    "lat": 39.846821,
    "long": 33.515251,
    "northeast_lat": 39.872843,
    "northeast_long": 33.597968,
    "southwest_lat": 39.813802,
    "southwest_long": 33.468289
  },
  {
    "plaka": 72,
    "name": "BATMAN",
    "lat": 37.881168,
    "long": 41.13509,
    "northeast_lat": 37.947274,
    "northeast_long": 41.17603,
    "southwest_lat": 37.85657,
    "southwest_long": 41.080591
  },
  {
    "plaka": 73,
    "name": "ŞIRNAK",
    "lat": 37.5163889,
    "long": 42.4611111,
    "northeast_lat": 37.533572,
    "northeast_long": 42.471127,
    "southwest_lat": 37.500093,
    "southwest_long": 42.444631
  },
  {
    "plaka": 74,
    "name": "BARTIN",
    "lat": 41.6344444,
    "long": 32.3375,
    "northeast_lat": 41.656542,
    "northeast_long": 32.37105,
    "southwest_lat": 41.613513,
    "southwest_long": 32.297457
  },
  {
    "plaka": 75,
    "name": "ARDAHAN",
    "lat": 41.110481,
    "long": 42.702171,
    "northeast_lat": 41.121467,
    "northeast_long": 42.717129,
    "southwest_lat": 41.09891,
    "southwest_long": 42.686418
  },
  {
    "plaka": 76,
    "name": "IĞDIR",
    "lat": 39.9166667,
    "long": 44.0333333,
    "northeast_lat": 39.950163,
    "northeast_long": 44.092825,
    "southwest_lat": 39.884109,
    "southwest_long": 43.980729
  },
  {
    "plaka": 77,
    "name": "YALOVA",
    "lat": 40.65,
    "long": 29.2666667,
    "northeast_lat": 40.66806,
    "northeast_long": 29.316536,
    "southwest_lat": 40.634138,
    "southwest_long": 29.210233
  },
  {
    "plaka": 78,
    "name": "KARABÜK",
    "lat": 41.2,
    "long": 32.6333333,
    "northeast_lat": 41.238129,
    "northeast_long": 32.675518,
    "southwest_lat": 41.163014,
    "southwest_long": 32.592582
  },
  {
    "plaka": 79,
    "name": "KİLİS",
    "lat": 36.718399,
    "long": 37.12122,
    "northeast_lat": 36.747819,
    "northeast_long": 37.159541,
    "southwest_lat": 36.702673,
    "southwest_long": 37.085183
  },
  {
    "plaka": 80,
    "name": "OSMANİYE",
    "lat": 37.06805,
    "long": 36.261589,
    "northeast_lat": 37.104061,
    "northeast_long": 36.287941,
    "southwest_lat": 37.04694,
    "southwest_long": 36.208034
  },
  {
    "plaka": 81,
    "name": "DÜZCE",
    "lat": 40.843849,
    "long": 31.15654,
    "northeast_lat": 40.891762,
    "northeast_long": 31.195807,
    "southwest_lat": 40.824717,
    "southwest_long": 31.106662
  }
];

  const [city, setCity] = useState(cities[33]);

  const values = {
    city,
    setCity,
    cities,
    myWeather,
    setMyWeather
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContext;
