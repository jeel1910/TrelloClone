import styled from "@emotion/styled";

const SideBarStyle = styled.div`
  color: white;
  width: 20%;
  height: 100vh;
  left: 0;
  background-color: #19346e;
  border-right: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  flex-direction: column;
  text-align: start;

  .title-box {
    padding: 3% 5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default SideBarStyle;
