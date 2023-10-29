import styled from 'styled-components';
 
// ********* styled component for full visualViewport, tab view and mobile view ****** 
export const Container = styled.div`
  display: inline-flex;
  padding: 40px 40px 40px 142px;
  justify-content: flex-end;
  align-items: center;
  gap: 147px;
  background: #FFF;

  @media (max-width: 998px){
    padding: 2rem 3.2rem;
  }

  @media (max-width: 768px){
    padding: 2rem 2rem;
    gap : 1.5rem;
  }
  @media (max-width: 480px){
    width: 100vw;
    padding : 3rem 3.2rem;
   
}  
`;
// *************** Image section ************* 

export const LeftPanel = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  
  @media (max-width: 768px){
    width :30%
  }
  @media (max-width: 480px){
   display: none;
}

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px){
    width: 100%;
    height: 100%;
  }
  @media (max-width: 480px){
    width;100%
   
}

`;

// ******* Login form Section *************** 
export const H2 = styled.h2`
  color: #04072F;
  text-align: center;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 2rem;
  }
`;

export const RightPanel = styled.div`
  width: 70%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 768px){
    height:80vh;
    width: 60%;
    padding : 1rem;
  }
  @media (max-width: 480px){
   width:80vw;
}

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
    
  @media (max-width: 480px){
   width:75vw;
   padding:2rem 1rem;
}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const Input = styled.input`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  margin-left:1rem;

`;

export const PasswordInput = styled.input`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  margin-left:1rem;
`;

export const PasswordToggle = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px){
    position:absolute;
    right: 20px;
    top : 50%
}
`;

export const Label = styled.label`
  text-align: left;
  color: #04072F;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-left:1rem;

  @media (max-width: 480px){
   line-height: 90%;
}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left:1rem;

  @media (max-width: 768px){
    gap:1px;
  }
`;

export const Checkbox = styled.input`
  margin: 0;
`;

export const Button = styled.button`
  padding: 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 50%;
  align-self: center;
  border-radius: 8px;
  background: #1575A7;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; 

  @media (max-width: 768px){
    font-size: 1rem;
    width : 95%;
    margin-left:10px;
  }
`;

export const RegisterLink = styled.a`
  text-align: center;
  text-decoration: none;
  cursor: default;
  color: #04072F;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChangePasswordLink = styled.a`
  text-align: center;
  margin-left: auto;
  margin-right:2rem;
  text-decoration: none;
  cursor: pointer;
  color: #F78719;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; 

  @media (max-width: 768px){
    margin-right: 0.5rem;
  }


`;
export const StyledSpan = styled.span`
  color: #F78719;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: underline;
  cursor : pointer;
`;