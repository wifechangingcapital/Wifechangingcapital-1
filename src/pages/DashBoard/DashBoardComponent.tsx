import './styles.css'

import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import { DarkCard } from '../../components/Card'
import NFTtable from './NFT'
//import ClaimTransaction from './ClaimTransaction'
import UserTokenBalance from './UserTokenBalance'
//import UserTokenStats from './Userstats'
//import CompanyMetrics from "../../components/CompanyMetrics"
export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.RINKEBY)
  const StyledText = styled.text`
    font-size: 20px;
    text-color: #ffffff;
  `
  if (isNotOnMainnet) {
    return (
      <DarkCard
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {' '}
        <StyledText style={{ justifyContent: 'center' }}> Please Connect to Ethereum Mainnet</StyledText>{' '}
      </DarkCard>
    )
  } else {
    if (showConnectAWallet) {
      return (
        <DarkCard
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          {' '}
          <StyledText style={{ justifyContent: 'center' }}> Connect a wallet to continue </StyledText>{' '}
        </DarkCard>
      )
    } else {
      return (
        <>
          <div className={'flexbox-vertical-container'}>
            <UserTokenBalance></UserTokenBalance>
            <p></p>
            <NFTtable></NFTtable>
          </div>
        </>
      )
    }
  }
}
