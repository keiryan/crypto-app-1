import styled from "styled-components";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { CiMoneyBill } from "react-icons/ci";

export const Container = styled.div`
  margin-top: 0.4rem;
`;
export const Div = styled.div`
  color: rgba(255, 255, 255, 0.6);

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  padding: 0.65rem 0 0.65rem 0.35rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
  }
`;
export const StyleMyDetails = styled(AiOutlineUsergroupAdd)`
  font-size: 1.4rem;
`;
export const StyleProfile = styled(BiCamera)`
  font-size: 1.4rem;
`;
export const StyleNotification = styled(MdOutlineNotificationImportant)`
  font-size: 1.4rem;
`;
export const StylePassword = styled(RiLockPasswordLine)`
  font-size: 1.4rem;
`;
export const StyleTeam = styled(RiTeamFill)`
  font-size: 1.4rem;
`;
export const StyleBiling = styled(CiMoneyBill)`
  font-size: 1.4rem;
`;
export const Title = styled.p`
  font-size: 0.95rem;
  font-family: Helvetica, sans-serif;

  margin-left: 0.6rem;
`;
