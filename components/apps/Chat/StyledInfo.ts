import styled from "styled-components";

const StyledInfo = styled.li`
  padding-bottom: 15px;

  figure {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    padding-left: 15px;

    figcaption {
      color: rgba(236, 236, 241);
      padding-left: 5px;

      b {
        font-weight: 600;
      }
    }
  }
`;

export default StyledInfo;
