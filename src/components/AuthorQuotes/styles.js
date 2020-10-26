import styled from 'styled-components'

export const Wrapper = styled.div`
  > .ant-typography {
    margin-bottom: 20px;
  }
  .ant-btn {
    margin-bottom: 20px;
  }
  .ant-card {
    margin-bottom: 20px;
    background-color: rgba(0,0,0,.05);
    
    &:last-of-type {
      margin-bottom: 0;
    }
    
    .ant-card-body {
      display: flex;

      .prefix {
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 20px;
        font-size: 1.2em;
        color: rgba(0,0,0,.3);
        font-weight: 600;
        border-right: 1px solid rgba(0,0,0,.1);
        padding-right: 40px;
        display: inline-block; 
      }
      
      .quote {
        padding-left: 40px;
        justify-content: center;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
      }
    }
  }  
`