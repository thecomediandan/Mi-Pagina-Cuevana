Son archivos de styled-components por modulos semi generales

Ejemplos:

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    padding-right: 20px;
    border-radius: 4px;
    max-width: 144px;    
`;

export const Heading = styled.div`
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    background-color: #ffffff;
    color: #212529;
    margin: 0;
    border-radius: 4px;
    padding: 20px 0 20px 20px;
    max-height: 85px;
`;