import React from 'react';

function BackButton({back}) {
  return (
    <svg className="back" onClick={back} width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9312 0.494114C13.4845 3.21972 7.8893 7.67981 1.07771 9.78597C-0.0170086 10.1576 -0.503551 12.016 0.712805 12.5116C7.5244 15.485 13.7278 19.9451 20.9043 22.0512C22.2423 22.4229 23.5803 20.5645 22.3639 19.5734C20.5394 18.0867 19.0798 16.3522 17.3769 14.6179C27.8375 14.8657 38.2982 14.6179 48.6372 16.4763C54.2325 17.4674 60.5577 18.8302 64.8148 22.9187C69.9235 27.8741 65.3013 34.0689 60.5575 36.7945C56.4217 39.1484 38.5415 43.2366 44.7447 51.4135C48.3938 56.2452 53.3808 57.4841 58.8544 58.9708C60.4357 59.3425 61.8953 59.962 63.2333 60.7053C68.4636 63.5548 59.9491 67.2716 57.8813 67.3955C53.7455 67.6432 49.4883 66.4043 45.4745 65.4132C44.2581 65.0415 43.7716 66.8999 44.988 67.3955C50.7048 69.6255 60.4357 72.7228 65.4225 67.3955C69.6798 62.6876 66.8824 58.7231 61.8951 56.8647C58.6112 55.6258 40.3658 50.9179 48.8803 45.4667C54.4753 41.8738 61.1655 40.8827 66.3958 36.5465C70.0447 33.4492 70.8963 27.8741 69.0718 23.5379C66.7607 18.3345 59.9491 16.1044 55.0837 14.7416C42.9202 11.3968 29.7835 11.3968 17.255 11.7682C19.2012 8.79483 21.0257 5.44977 22.2421 2.1047C22.6072 0.741896 20.9043 -0.00165344 19.9312 0.494114ZM15.5523 16.6C12.1466 14.9894 8.74075 13.0071 5.33496 11.2727C9.5922 9.41429 13.3629 7.06035 17.4985 4.83031C15.9173 7.43223 14.0927 9.90985 13.7278 12.7594C13.6062 13.379 13.9711 13.8746 14.4576 14.1222C14.5793 14.9894 14.9442 15.8564 15.5523 16.6Z" fill="#AC1111"/>
    </svg>
  )
}

export default BackButton