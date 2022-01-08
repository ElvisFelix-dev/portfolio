import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`

  font-family: 'Saira Extra Condensed', sans-serif;

  .parent{
    display: flex;
  }

  .sidebar{
    width:20%;
    height: 100%;
    position: fixed;
    background-color: #512679;
  }

  .sidebar-pos{
    position: absolute;
    top:50%;
    transform:translateY(-50%);
  }

  .img-sidebar{text-align: center;}

  .img-sidebar img{
    width: 80%;
    border:8px solid #62318e;
    border-radius: 50%;
  }

  .menu{
    margin:20px 0;
    text-align: center;
  }

  .menu a{
    color: white;
    opacity: 0.4;
    font-size: 24px;
    display: block;
    margin-bottom: 20px;
    text-decoration: none;

    transition: background-color 0.2s;
    &:hover {
      transition: 0.5s;

      opacity: 0.2;
    }
  }

  .menu a.selected{
    opacity: 1;
  }

  .content{
    position: fixed;
    left: 20%;
    width: 80%;
    height: 100%;
    overflow-y:auto;
    padding:0 3%;
  }

  section.descricao{
    position: relative;
    top:50%;
    transform:translateY(-50%);
  }

  section.descricao h2{
    color:#343a40;
    font-size: 46px;
  }

  section.descricao h2 > span,
  section.descricao h3 > span
  {
    color:  #62318e;
  }

  section.descricao h3{
    margin:15px 0;
    color: #6c757d;
    font-size: 26px;
  }

  section.descricao p{
    color:#6c757d;
    font-size:20px;
    margin-top:40px;
  }

  .icons-social{
    margin-top:20px;
  }

  .icons-social a{
    text-decoration:none;
    color: white;
    width:40px;
    height:40px;
    border-radius:20px;
    display: inline-block;
    margin:0 10px;
    text-align: center;

    transition: background-color 0.2s;
    &:hover {
      transition: 0.3s;

      opacity: 0.6;
    }
  }

  .icons-social i{
    line-height:40px;
  }
`;




