import React, { Component } from 'react';
import './Loader.scss';
// import SVGlogo from './logo.svg';

class Loader extends Component {
  render() {
    return (
      <div className="Loader" id="Loader">
      <div id="logoArea">
        {/* <img src={SVGlogo} alt="mylogo" id="SVGlogo"/> */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="596.000000pt" height="97.000000pt" viewBox="0 0 596.000000 97.000000"
         preserveAspectRatio="xMidYMid meet" id="SVGlogo">
        <g transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path
        id="works"
        stroke="#000000"
        strokeWidth="31"
        d="M4817 962 c-31 -4 -54 -39 -44 -66 4 -9 19 -22 34 -28 38 -17 39 -20
        38 -80 l0 -53 -135 -5 c-85 -4 -145 -11 -163 -20 -25 -12 -32 -12 -57 3 -37
        22 -123 23 -144 1 -31 -30 -16 -70 30 -83 l29 -7 0 -140 0 -139 -74 -3 -74 -3
        8 38 c13 68 13 147 -1 193 -15 52 -73 116 -124 138 -46 21 -144 23 -194 5 -36
        -12 -42 -12 -52 2 -8 11 -31 15 -92 15 -71 0 -83 -3 -96 -21 -9 -14 -12 -29
        -7 -42 7 -18 15 -25 50 -44 2 -1 -30 -48 -70 -104 l-74 -101 -3 43 c-4 54 -16
        69 -53 69 -30 0 -37 -8 -212 -250 l-47 -65 2 205 3 204 24 6 c36 8 53 39 38
        70 -12 24 -17 25 -118 28 -102 3 -106 2 -118 -21 -19 -35 -6 -65 32 -75 l32
        -8 0 -291 c0 -316 1 -323 55 -323 25 0 43 20 144 157 l116 158 0 -53 c0 -46 3
        -54 25 -64 34 -15 61 1 103 61 18 26 61 87 97 136 l65 88 1 -37 c2 -41 1 -37
        19 -95 34 -107 157 -162 192 -86 9 20 8 28 -6 44 -10 11 -28 21 -39 23 -53 8
        -82 140 -45 211 46 90 186 96 240 9 16 -26 21 -50 21 -91 -2 -77 -16 -109 -58
        -126 -43 -19 -58 -45 -45 -79 l10 -26 238 0 c215 0 240 2 254 18 23 27 9 65
        -30 77 l-32 9 0 83 c0 102 16 143 67 177 34 22 48 25 138 25 55 0 107 -2 115
        -4 13 -4 15 -27 15 -142 0 -133 -1 -138 -22 -141 -36 -5 -58 -38 -47 -70 9
        -27 10 -27 114 -30 96 -3 106 -1 122 18 24 29 10 62 -31 75 l-33 10 4 92 c3
        101 18 133 74 164 34 19 114 33 114 20 0 -5 -26 -28 -57 -52 -61 -46 -82 -67
        -83 -85 0 -6 53 -84 118 -174 64 -89 136 -190 159 -224 44 -64 73 -87 101 -79
        10 3 54 57 99 121 46 65 119 167 163 227 44 61 80 120 80 132 0 14 -17 36 -46
        60 -26 21 -59 48 -73 60 l-26 21 174 0 c168 -1 175 -1 192 21 17 21 16 43 -4
        69 -7 9 -67 12 -238 12 -224 0 -228 0 -255 -23 -29 -26 -35 -67 -13 -94 8 -9
        48 -44 90 -78 l77 -61 -117 -161 c-64 -89 -119 -159 -122 -157 -10 6 -231 315
        -228 318 44 28 111 94 123 120 22 47 20 69 -10 99 -45 46 -163 46 -276 2 -17
        -7 -18 3 -18 112 0 83 -4 125 -13 137 -13 18 -58 25 -120 18z"/>
        <path
        id="name"
        stroke="#000000"
        strokeWidth="30"
        d="M168 714 c-102 -36 -153 -114 -153 -233 1 -116 45 -183 148 -226 57
        -24 708 -18 753 7 29 16 31 16 42 -3 11 -17 24 -19 112 -19 l100 0 -60 -82
        c-33 -45 -60 -91 -60 -103 0 -29 19 -45 52 -45 23 0 38 14 95 92 191 261 263
        365 263 384 0 14 -17 36 -47 60 -25 22 -58 48 -72 60 l-25 21 127 1 127 0 -17
        -31 c-12 -22 -17 -57 -17 -112 -1 -119 37 -182 137 -224 45 -19 68 -21 302
        -21 248 0 254 1 269 21 l15 22 31 -20 31 -20 -60 -81 c-89 -120 -83 -153 25
        -154 110 -1 113 0 120 26 8 31 -3 66 -21 66 -8 0 -17 4 -20 10 -3 5 81 125
        188 267 107 142 199 268 205 279 8 15 8 27 -1 45 -12 22 -19 24 -96 27 -93 3
        -111 -5 -111 -50 0 -23 6 -32 29 -41 l29 -12 -94 -125 c-52 -69 -100 -134
        -107 -144 -12 -17 -17 -18 -50 -7 -77 26 -114 117 -85 210 11 37 22 50 52 66
        48 25 58 44 43 76 -12 23 -16 24 -134 27 -100 2 -124 0 -137 -13 -36 -36 -10
        -85 47 -87 30 -1 37 -4 31 -17 -3 -9 -8 -52 -11 -97 -5 -67 -2 -88 15 -127
        l21 -47 -227 0 c-125 0 -233 4 -240 9 -11 6 1 26 49 82 35 41 66 76 69 79 3 3
        25 28 48 57 57 69 55 98 -8 133 -45 25 -46 25 -353 28 -334 4 -358 1 -375 -46
        -14 -42 1 -65 87 -137 45 -37 81 -70 81 -75 0 -4 -20 -35 -45 -69 l-45 -61
        -95 0 -95 0 0 178 c0 97 -4 182 -8 189 -4 6 -19 14 -34 18 -20 5 -31 2 -44
        -13 -16 -19 -19 -20 -47 -6 -44 23 -143 27 -201 8 -61 -21 -118 -77 -139 -138
        -20 -58 -17 -159 6 -203 l18 -33 -188 0 c-207 0 -236 7 -277 63 -27 37 -27
        121 0 161 37 58 126 76 194 41 43 -22 69 -19 82 10 16 35 -1 68 -49 90 -47 23
        -145 28 -195 9z m710 -108 c41 -21 65 -69 65 -128 0 -83 -49 -130 -136 -132
        -85 -1 -137 45 -142 127 -7 119 105 189 213 133z"/>
        <path
        id="under"
        stroke="#000000"
        strokeWidth="30"
        d="M2620 114 l0 -34 240 0 240 0 0 34 0 33 -240 1 -240 0 0 -34z"/>
        </g>
        </svg>
      </div>
      </div>
    );
  }
}

export default Loader;
