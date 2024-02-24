import { Asset } from "./__generated/sdk";

// type ContentfulImgType = {
//   __typename: string;
//   sys: {
//     id: string;
//   };
//   url: string;
//   description: string;
//   width: number;
//   height: number;
// };

type ImgPropertType = "url" | "description" | "width" | "height";

const returnCorrectFallback = (imgProperty: ImgPropertType) => {
  switch (imgProperty) {
    case "url":
      return "";
    case "description":
      return "";
    case "width":
      return 0;
    case "height":
      return 0;
  }
};

// ! COULD NOT GET THIS FUNC TO WORK! :'(

export const outputCtfImgValueOrFallback = (
  imgRef: Asset | undefined | null,
  imgProperty: ImgPropertType
) => {
  if (imgRef) {
    if (imgRef[imgProperty]) {
      return imgRef[imgProperty];
    } else {
      return returnCorrectFallback(imgProperty);
    }
  } else {
    return returnCorrectFallback(imgProperty);
  }
};

//(card.mediaCollection?.items[0] && card.mediaCollection?.items[0].url) || ""