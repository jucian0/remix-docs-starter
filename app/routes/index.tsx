import { useNavigate } from "remix";
import styled from "styled-components";
import withHome from "~/hocs/withHome";
import Iframe from 'react-iframe'
import { Config } from "~/config";
import performance from '~/assets/performance.png'
import easy from '~/assets/easy.png'
import flexible from '~/assets/flexible.png'


const Hero = styled.div`
  width:100%;
  background-color:${({ theme }) => theme.colors.primary};
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;



  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.white};
  }

  p{
    font-size:1.6em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.white};
  }

  button{
    border:1px solid ${({ theme }) => theme.colors.white};
    color:${({ theme }) => theme.colors.white};
    font-weight:600;
    font-size:1.3em;
    padding:10px 30px;
    border-radius:5px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition:ease 300ms;
    margin:20px;

    &:hover{
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
      cursor:pointer;
    }
  }

  .docs-btn{
    border:1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    font-weight:600;
    font-size:1.3em;
    padding:10px 30px;
    border-radius:5px;
    background-color: ${({ theme }) => theme.colors.white};
    transition:ease 300ms;
    margin:20px;

    &:hover{
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
      cursor:pointer;
    }
  }
`

const Section = styled.section`
  display:grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  width:100%;
  max-width:1200px;
  margin:0 auto;
  background-color:${({ theme }) => theme.colors.white};
  padding:20px;
  
  & div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    & h1, p{
      //color:${({ theme }) => theme.colors.white};
    }

    & img{
      width:20%;
      height:auto;
    }
  }

`

const CodeSandBox = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-bottom:100px;

  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.primary};
  }

  div{
    width:1040px;
    padding:2px;
    .sandbox{
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
`


function Index() {

  const navigate = useNavigate()

  function redirect() {
    navigate('/docs/quick-start')
  }

  return (
    <div >
      <Hero>
        <h1>React Create Form</h1>
        <p>CreateForm provides you a simple way to create forms with react</p>
        <div>
          <button className="docs-btn" onClick={redirect}>Read docs</button>
          <button>Quick start</button>
        </div>
        <CodeSandBox>
          <div>
            <Iframe
              url="https://codesandbox.io/embed/useform-forked-9ihe9?fontsize=14&hidenavigation=1&theme=dark"
              width="100%"
              height="650px"
              className="sandbox"
              id="myId"
              position="relative"
            />
          </div>
        </CodeSandBox>
      </Hero>
      <Section>
        <div>
          <h1>Easy</h1>
          <img src={easy} alt="" />
          <p></p>
        </div>
        <div>
          <h1>Flexible</h1>
          <img src={flexible} alt="" />
          <p></p>
        </div>
        <div>
          <h1>Performance</h1>
          <img src={performance} alt="" />
          <p></p>
        </div>
      </Section>
    </div>
  );
}

export default withHome(Index);