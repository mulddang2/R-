import { useState } from 'react';
// 사진을 클릭하면 바깥에 있는 <div>의 background--active CSS class를 제거하고 <img>에 picture--active class를 추가합니다. 그리고 배경을 다시 클릭하면 원래 CSS class로 돌아와야 합니다.

// 화면상으로는 사진을 클릭하면 보라색 배경은 제거되고 사진의 테두리는 강조 표시됩니다. 사진 외부를 클릭하면 배경이 강조 표시되고 사진의 테두리 강조 표시는 제거됩니다.

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';

  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt='Rainbow houses in Kampung Pelangi, Indonesia'
        src='https://i.imgur.com/5qwVYb1.jpeg'
      />
    </div>
  );
}
