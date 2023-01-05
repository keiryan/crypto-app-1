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
  Wrappers,
  AtlData,
  AthData,
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
  const athDate = new Date(
    data?.market_data.ath_date?.usd
  ).toLocaleDateString();
  const atlDate = new Date(
    data?.market_data.atl_date?.usd
  ).toLocaleDateString();

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
              <OfficialLink target="_blank" href={data.links?.homepage[0]}>
                {data.links?.homepage[0]}
              </OfficialLink>
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
            <Wrappers>
              <AthData>
                <p>ATH:</p>
                <p>${data?.market_data.ath.usd}</p>
                <p>
                  {" "}
                  {(data?.market_data.ath_change_percentage?.usd).toFixed(2)}%
                </p>
                <p>{athDate}</p>
              </AthData>
              <AtlData>
                <p>ATL:</p>
                <p>${data?.market_data.atl.usd}</p>
                <p>
                  {" "}
                  {(data?.market_data.atl_change_percentage?.usd).toFixed(2)}%
                </p>
                <p>{atlDate}</p>
              </AtlData>
            </Wrappers>
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
              <NavigationLink
                target="_blank"
                href={data?.links?.blockchain_site[0]}
              >
                {data?.links?.blockchain_site[0]}
              </NavigationLink>
            </Link>
            <Link>
              <CoinIconLink />{" "}
              <NavigationLink
                target="_blank"
                href={data?.links?.blockchain_site[0]}
              >
                {data?.links?.blockchain_site[0]}
              </NavigationLink>
            </Link>
          </CoinLink>
        </Main>
        <Footer>
          <TokenLink>
            <CoinIconLink />
            <NavigationLink
              target="_blank"
              href={data?.links?.blockchain_site[0]}
            >
              {data?.links?.blockchain_site[0]}
            </NavigationLink>
          </TokenLink>
        </Footer>
      </MainDiv>
    </Container>
  );
};

export default CoinPageLayout;
