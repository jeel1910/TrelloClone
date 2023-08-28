import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: #f1f2f4;
  width: 18%;
  border-radius: 10px;
  padding: 1%;
  margin-right: 1.5%;
  height: fit-content;
  text-align: left;

  .card-title {
    font-weight: 700;
    margin-bottom: 4%;
    margin-left: 2%;
  }

  .task-box {
    background-color: white;
    padding: 3%;
    border: 0.2px solid light-gray;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f, 0 1px 0 #091e4240;
    svg {
      display: none;
    }
  }

  .task-box: hover {
    background-color: #f1f2f4;
    svg {
      display: inline;
    }
  }
  .add-card-bottom {
    cursor: pointer;
    margin-top: 4%;
    flex: 2;
    border-radius: 10px;
    padding: 3% 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: gray;
  }
  .add-card-bottom: hover {
    background-color: #091e4214;
  }
  .card-icon {
    margin-top: 4%;
    padding: 4% 3%;
    color: gray;
    border-radius: 10px;
  }
  .card-icon: hover {
    background-color: #091e4214;
  }
`;

//export default CardStyle;
