import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 6vh;
  background-color:#0E2755;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4% 1.5%;
  margin: 0;

  .logo {
    margin-right: 8%;
  }

  .dropdowns {
    color: white;
    font-size: 1rem;
    cursor: pointer;

    p {
      margin: 2%;
    }
  }

  .icon {
    color: white;
    height: 1%;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .icon-box {
    margin: 0% 2% 0% 2%;
  }
  .end-box {
    justify-content: flex-end:
    flex-grow: 1;
  }
`;

export default HeaderStyle;
