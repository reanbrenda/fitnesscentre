/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <section className="pricing" css={styles}>
            <Container>
                <Heading title="OUR PRICING" info="the pricing is based on the level of workout you need." />
                <div className="wrapper">
                    <PricingCard cardTitle="BEGINNER" cardPricing="ksh.4500/m" />
                    <PricingCard cardTitle="EXPERT" cardPricing="ksh.3500/m" />
                    <PricingCard cardTitle="PRO" cardPricing="ksh.4000/m" />
                </div>
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: #000;
    .container {
        padding: 150px 0;
        max-width: 1200px;
        .wrapper {
            padding: 80px 0 0 0;
            display: flex;
            justify-content: space-between;
        }
    }
    @media (max-width: 730px) {
        .container {
            .wrapper {
                flex-direction: column;
                flex-wrap: wrap;
                .pricingCard {
                    margin: 10px auto;
                }
            }
        }
    }

    @media (min-width: 731px) and (max-width: 1320px) {
        .container {
            .wrapper {
                flex-wrap: wrap;
                .pricingCard {
                    max-width: 33%;
                    margin: 20px 0 0 0;
                }
            }
        }
    }
`

export default Pricing;