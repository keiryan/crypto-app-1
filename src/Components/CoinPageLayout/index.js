import React from "react";

import {
  Container,
  Header,
  Section,
  Main,
  CoinInfo,
  CoinLink,
  Footer,
  CoinLogo,
  CoinName,
  CoinOfficalLink,
  MainDiv,
  CoinIconLink,
  OfficialLink,
  Span,
  StyleArrowDown,
  StyleStack,
  StylePlusSquare,
  ListDiv,
  Link,
  TokenLink,
  Wrapper,
  CoinGrowth,
  Summary,
  CoinMarketDiv,
  ProgressBar,
  ProgressDiv,
  NavigationLink,
} from "./index.styes";

const ItemList = ({ item, data }) => {
  return (
    <ListDiv>
      <p>
        <StylePlusSquare /> {item}: ${data}
      </p>
    </ListDiv>
  );
};

const CoinPageLayout = ({ data }) => {
  return (
    <Container>
      <MainDiv>
        <Summary>Your Summary:</Summary>
        <Header>
          <Section>
            <CoinLogo>
              <img src={data?.image.large} alt="coin logo" />
            </CoinLogo>
            <CoinName>{data?.id}</CoinName>
            <CoinOfficalLink>
              <CoinIconLink />
              <OfficialLink>{data.links?.homepage[0]}</OfficialLink>
            </CoinOfficalLink>
          </Section>
          <Section>
            <Span>$0.0001256</Span>
            <CoinMarketDiv>
              <CoinGrowth>
                {" "}
                <StyleArrowDown /> 0.12%
              </CoinGrowth>
              <StyleStack />
            </CoinMarketDiv>
          </Section>
          <Section>
            <Wrapper>
              <ItemList
                item="Market Cap"
                data={data.market_data?.market_cap?.usd}
              />
              <ItemList
                item="Fully Diluated Valuation "
                data={data.market_data?.fully_diluted_valuation?.usd}
              />
              <ItemList item="Volume 24h" data="$123456" />
              <ItemList item="Volume/Market" data="$123456" />
              <br />
              <ItemList
                item="Total Volume"
                data={data.market_data?.total_volume.usd}
              />
              <ItemList
                item="Circulation Supply"
                data={data.market_data?.circulating_supply}
              />
              <ItemList item="Max Supply" data={data.market_data?.max_supply} />
            </Wrapper>
            <ProgressDiv>
              <ProgressBar></ProgressBar>
            </ProgressDiv>
          </Section>
        </Header>
        <Main>
          <p>Description</p>
          <CoinInfo>
            <p>{data?.description.en}</p>
          </CoinInfo>
          <CoinLink>
            <Link>
              <CoinIconLink />{" "}
              <NavigationLink href={data?.links?.blockchain_site[0]}>
                {data?.links?.blockchain_site[0]}
              </NavigationLink>
            </Link>
            <Link>
              <CoinIconLink /> {data?.links?.official_forum_url[0]}
            </Link>
          </CoinLink>
        </Main>
        <Footer>
          <TokenLink>
            <CoinIconLink /> {data?.links?.repos_url.github}
          </TokenLink>
        </Footer>
      </MainDiv>
    </Container>
  );
};

export default CoinPageLayout;
