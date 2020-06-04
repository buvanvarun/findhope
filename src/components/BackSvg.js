import React, { useRef, useEffect } from "react";

const BackSvg = (props) => {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current.getBBox());
  }, []);
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="346 375 381 550"
      style={{ zIndex: 2, height: "30vh", marginTop: "30px" }}
      ref={ref}
    >
      <g>
        <defs>
          <rect id="SVGID_1_" width="1080" height="1080" />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#SVGID_2_)">
          <defs>
            <rect id="SVGID_3_" width="1080" height="1080" />
          </defs>
          <clipPath id="SVGID_4_">
            <use xlinkHref="#SVGID_3_" overflow="visible" />
          </clipPath>

          <g opacity="0.85" clipPath="url(#SVGID_4_)">
            <g>
              <defs>
                <rect
                  id="SVGID_9_"
                  x="488.311"
                  y="705.941"
                  width="96.736"
                  height="218.039"
                />
              </defs>
              <clipPath id="SVGID_10_">
                <use xlinkHref="#SVGID_9_" overflow="visible" />
              </clipPath>
              <polygon
                clipPath="url(#SVGID_10_)"
                fill="#8AD4F0"
                points="585.047,705.941 585.047,923.98 552.47,923.98 552.47,745.21 
                       521.297,744.848 521.297,923.98 488.312,923.98 488.312,706.814 				"
              />
            </g>
          </g>
          <path
            clipPath="url(#SVGID_4_)"
            fill="#768093"
            d="M622.428,653.866c0,0,42.047,60.534,42.047,188.125v33.348
               c0,0,0,7.612-11.6,7.612c-10.282,0-12.687-4.712-12.687-7.612c0-2.899,0.726-32.623,0.726-32.623s-0.236-125.591-28.951-154.305
               C611.963,688.411,622.917,679.973,622.428,653.866"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#8CD5F1"
            d="M724.543,431.249l3.118,163.417c0,0,0,21.622-18.712,21.622H367.978
               c0,0-21.831,0-21.831-21.622c0-14.763,3.639-163.417,3.639-163.417s-3.639-53.017,41.582-53.017
               c39.503,0,51.457,25.989,51.457,32.226s0.52-32.226,44.701-34.825c44.181-2.598,46.26,31.187,46.26,33.785
               c0,2.6,8.317-33.927,49.378-33.927c41.063,0,46.779,30.809,46.779,32.368s12.475-24.429,48.34-24.429
               C714.146,383.43,724.543,414.611,724.543,431.249"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#6E7A96"
            d="M452.426,616.288v55.702c0,0,0,35.16,40.235,35.16h88.808
               c0,0,40.959,0,40.959-45.432c0-33.95-1.088-45.431-1.088-45.431H452.426z"
          />
          <g opacity="0.85" clipPath="url(#SVGID_4_)">
            <g>
              <defs>
                <rect
                  id="SVGID_11_"
                  x="400.955"
                  y="627.406"
                  width="132.253"
                  height="98.233"
                />
              </defs>
              <clipPath id="SVGID_12_">
                <use xlinkHref="#SVGID_11_" overflow="visible" />
              </clipPath>
              <path
                clipPath="url(#SVGID_12_)"
                fill="#768093"
                d="M452.426,627.406c0,0-51.471,10.148-51.471,61.62
                       s94.004,33.921,97.506,32.985c2.814-0.751,31.535-9.787,31.535-9.787s5.8-6.162,1.812-14.861
                       c-3.987-8.699-16.311-3.987-16.311-3.987l-20.661,4.713c0,0-70.321,15.948-70.321-9.425s27.911-37.696,27.911-37.696V627.406z"
              />
            </g>
          </g>
          <path
            clipPath="url(#SVGID_4_)"
            fill="#333333"
            d="M511.812,645.067h51.82c3.658,0,6.624,2.966,6.624,6.625v86.225
               c0,3.658-2.966,6.624-6.624,6.624h-51.82c-3.659,0-6.624-2.966-6.624-6.624v-86.225
               C505.188,648.033,508.152,645.067,511.812,645.067"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#EEF4ED"
            d="M539.596,497.627c0,15.236-12.351,27.587-27.587,27.587
               c-15.236,0-27.587-12.351-27.587-27.587s12.351-27.587,27.587-27.587C527.245,470.041,539.596,482.392,539.596,497.627"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#F3F1EE"
            d="M592.078,497.627c0,15.236-12.351,27.587-27.587,27.587
               c-15.235,0-27.587-12.351-27.587-27.587s12.352-27.587,27.587-27.587C579.728,470.041,592.078,482.392,592.078,497.627"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#4F5E71"
            d="M529.107,485.767c0,8.693-7.047,15.74-15.74,15.74
               c-8.694,0-15.741-7.047-15.741-15.74s7.047-15.74,15.741-15.74C522.06,470.026,529.107,477.074,529.107,485.767"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#565D6E"
            d="M580.231,485.767c0,8.693-7.047,15.74-15.74,15.74
               c-8.694,0-15.74-7.047-15.74-15.74s7.046-15.74,15.74-15.74C573.185,470.026,580.231,477.074,580.231,485.767"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#5BB8E2"
            d="M462.007,516.019c0,0,24.713,29.598,77.588,29.598
               c52.875,0,74.428-29.598,74.428-29.598s14.225-15.087,29.311,0c15.087,15.086,1.725,29.598,1.725,29.598
               s-27.587,42.53-105.463,42.53c-77.876,0-108.336-43.967-108.336-43.967s-11.064-15.374,2.012-28.45
               C446.345,502.657,462.007,516.019,462.007,516.019"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#5E596C"
            d="M449.78,528.013c0,0,30.765,35.147,87.125,35.147
               c56.359,0,77.417-19.06,87.372-29.979c12.607-13.828,5.789,4.136,5.789,4.136s-17.649,33.08-92.639,33.08
               c-70.487,0-92.402-36.595-92.402-36.595s-1.861-3.101,0-4.962C446.885,526.979,448.747,526.979,449.78,528.013"
          />
          <g opacity="0.85" clipPath="url(#SVGID_4_)">
            <g>
              <defs>
                <rect
                  id="SVGID_13_"
                  x="640.231"
                  y="842.769"
                  width="24.243"
                  height="40.202"
                />
              </defs>
              <clipPath id="SVGID_14_">
                <use xlinkHref="#SVGID_13_" overflow="visible" />
              </clipPath>
              <path
                clipPath="url(#SVGID_14_)"
                fill="#8AD5F0"
                d="M640.953,842.77h23.521v32.341c0,0-0.006,7.486-10.454,7.841
                       c-13.443,0.455-13.79-6.957-13.79-6.957L640.953,842.77z"
              />
            </g>
          </g>
          <path
            clipPath="url(#SVGID_4_)"
            fill="#8AD5F0"
            d="M494.37,698.191l23.434-5.264c0,0,11.48-3.603,14.647,5.975
               c1.864,5.639,0.283,9.62-0.986,11.655c-0.601,0.964-1.534,1.665-2.616,2.011l-28.24,9.018L494.37,698.191z"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#E6E6E6"
            d="M527.251,676.523h-10.76c-3.285,0-5.948-2.663-5.948-5.948v-10.761
               c0-3.285,2.663-5.948,5.948-5.948h10.76c3.285,0,5.948,2.663,5.948,5.948v10.761C533.199,673.86,530.536,676.523,527.251,676.523"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#333333"
            d="M521,661.493c0,2.044-1.657,3.702-3.701,3.702
               c-2.045,0-3.702-1.658-3.702-3.702s1.657-3.701,3.702-3.701C519.342,657.792,521,659.449,521,661.493"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#333333"
            d="M530.903,661.493c0,2.044-1.657,3.702-3.702,3.702
               c-2.044,0-3.701-1.658-3.701-3.702s1.657-3.701,3.701-3.701C529.246,657.792,530.903,659.449,530.903,661.493"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#808080"
            d="M529.819,670.353c0,1.445-1.172,2.617-2.618,2.617
               c-1.445,0-2.617-1.172-2.617-2.617s1.172-2.617,2.617-2.617C528.647,667.735,529.819,668.907,529.819,670.353"
          />
          <path
            clipPath="url(#SVGID_4_)"
            fill="#333333"
            d="M521,670.353c0,2.044-1.657,3.701-3.701,3.701
               c-2.045,0-3.702-1.657-3.702-3.701c0-2.045,1.657-3.702,3.702-3.702C519.342,666.65,521,668.308,521,670.353"
          />
        </g>
      </g>
    </svg>
  );
};

export default BackSvg;
