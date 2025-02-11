import { BOX_SHADOW } from "components/apps/Chat/config";
import styled, { css } from "styled-components";

type StyledMessageProps = {
  $image?: string;
  $isCommand?: boolean;
  $type: string;
  $writing?: boolean;
};

const MAX_IMAGE_SIZE = 256;

const StyledMessage = styled.li<StyledMessageProps>`
  box-shadow: ${BOX_SHADOW};
  border-radius: 18px;
  cursor: ${({ $image }) => ($image ? undefined : "text")};
  font-size: 16px;
  height: ${({ $image }) => ($image ? `${MAX_IMAGE_SIZE}px` : undefined)};
  line-height: 20px;
  margin: 20px;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  padding: 10px 15px;
  user-select: text;
  width: ${({ $image }) => ($image ? `${MAX_IMAGE_SIZE}px` : "max-content")};

  ${({ $writing }) =>
    $writing &&
    css`
      &::after {
        content: "";
        border-left: 1px solid #000;
      }
    `}

  ${({ $type }) =>
    $type === "assistant" &&
    css`
      background: linear-gradient(
        90deg,
        rgb(248, 249, 253),
        rgb(245, 248, 253)
      );
      color: #000;
      margin-left: 56px;
      margin-right: auto;
      max-width: calc(100% - 78px);
      position: relative;

      &::before {
        background-color: black;
        background-image: url("/favicon.ico");
        background-size: contain;
        border-radius: 50%;
        content: "";
        height: 31px;
        left: -40px;
        position: absolute;
        top: 9px;
        width: 31px;
      }
    `}

  ${({ $isCommand, $type }) =>
    $type === "user" &&
    css`
      background: linear-gradient(
        90deg,
        ${$isCommand ? "rgb(224, 40, 234)" : "rgb(40, 112, 234)"},
        ${$isCommand ? "rgb(148, 27, 239)" : "rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}

  background: ${({ $image }) => ($image ? `url(${$image})` : undefined)};
  background-size: cover;
`;

export default StyledMessage;
