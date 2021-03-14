/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import JoinUs1 from "../../images/JoinUs1.png";
import JoinUs2 from "../../images/JoinUs2.png";
import JoinUsInfo from "./JoinUsInfo";

const JoinUs = () => {
    return (
        <section className="joinUs" css={styles}>
            <div className="wrap">
                <div className="img1">
                    <JoinUsInfo title="FOR WOMEN" info=" We believe that a great workout should be challenging, sweaty & smart. Each class provides a dynamic circuit of exercises that keep you motivated, engaged and focused. You’ll lengthen and tone your entire body with Pilates, torch calories through cardio drills, and become stronger and leaner with our strength training sets." />
                </div>
            </div>
            <div className="wrap">
                <div className="img2">
                    <JoinUsInfo title="FOR GUYS" info=" The workout is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.." />
                </div>
            </div>

        </section>
    )
}

const styles = css`
    width: 100%;
    display: flex;
    .wrap {
        overflow: hidden;
        width: 50%;
        .img1 {
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .8s;
            background: url('${JoinUs1}') no-repeat center/cover;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .wrap {
        overflow: hidden;
        width: 50%;
        .img2 {
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .8s;
            background: url('${JoinUs2}') no-repeat center/cover;
            &:hover {
                transform: scale(1.2);
            }
        }
    }

    @media(max-width: 990px) {
        flex-direction: column;
        .wrap {
            width: 100%;
        }
    }
`

export default JoinUs;