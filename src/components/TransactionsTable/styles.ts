import styled from "styled-components";

const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        tbody tr{
            background: var(--shape);
            border-radius: 100%;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            color: var(--text-body);
        
            &:first-child{
                color: var(--texy-title);
            }
        }

        .deposit{
                color: var(--green);
        }

        .withdraw{
            color: var(--red);
        }
    }
`;

export default Container