/***
Introduction:
Unlock Protocol has empowered our community with diverse functionalities accessible through the DAO. Among these, a significant feature is the ability to establish a percentage-based fee and subsequently execute actions using the collected funds. We propose a strategic action utilizing this feature to not only bolster the value of UDT tokens but also to facilitate effective management of Unlock's treasury resources.

Proposal Overview: 
Our proposed action entails directing the accumulated fees towards the purchase of UDT tokens via an exchange, followed by the burning of these tokens to reduce the overall token supply. This initiative is designed to create a positive impact by diminishing the total UDT supply, It is very important to create a healthy and sustainable economy around the use of the protocol to ensure long-term exponential growth for the protocol and DAO resources.

Fee Percentage: 
To initiate this process, we suggest setting the fee percentage at 1%. However, it's important to note that this value remains flexible and can be adjusted as deemed necessary in the future to adapt to changing circumstances or community preferences.
Community Engagement:
Prior to formalizing this proposal, we conducted extensive community engagement activities to gauge sentiment and gather feedback. This included utilizing Snapshot for temperature checking and initiating discussions on the Unlock forum to foster transparent dialogue and collaboration.
Snapshot Proposal: https://snapshot.org/#/unlock-protocol.eth/proposal/0xfb31abbb3ff6c8ef60bc3db9cd47adab0158ce1f955709f75cc2022b075dac8b
Forum Discussion: https://unlock.community/t/collect-fees-feature/484
Details of Functionality: https://github.com/unlock-protocol/unlock/blob/master/governance/proposals/002-set-protocol-fee.js

Testing and Validation:
Before proceeding with the formal proposal submission on Tally, rigorous internal testing has been conducted to ensure the seamless operation and effectiveness of the proposed functionality. These tests have provided confidence in the viability and correctness of the proposed action.

Conclusion:
In conclusion, by implementing this proposal, we aim to optimize the utility of Unlock Protocol's functionalities to benefit the UDT token ecosystem and the broader community. We believe that through strategic utilization of fee collection and supply reduction mechanisms, we can foster sustainable growth, enhance token value, and further empower our community members.
*/
const { ethers } = require('hardhat')
const { networks } = require('@unlock-protocol/networks')
const { UnlockV12 } = require('@unlock-protocol/contracts')

async function main([
  unlockAddress = '0x15334fe6F1cb0e286E1F9e1268B44E4221E169B7',
  protocolFeeStr = '100',
]) {
  const { chainId } = await ethers.provider.getNetwork()

  if (!unlockAddress && chainId !== 31337) {
    ;({ unlockAddress } = networks[chainId])
  }

  const protocolFee = ethers.utils.parseEther(protocolFeeStr)

  console.log(`Proposol to set protocolFee to ${ethers.utils.formatEther(
    protocolFee
  )}
  - unlock : ${unlockAddress}`)

  const calls = [
    {
      contractNameOrAbi: UnlockV12.abi,
      contractAddress: unlockAddress,
      functionName: 'setProtocolFee',
      functionArgs: [protocolFee],
    },
  ]

  const proposalArgs = {
    calls,
    proposalName: `Set Unlock Protocol fee to ${protocolFee}
    
##Introduction
Unlock Protocol has empowered our community with diverse functionalities accessible through the DAO. Among these, a significant feature is the ability to establish a percentage-based fee and subsequently execute actions using the collected funds. We propose a strategic action utilizing this feature to not only bolster the value of UDT tokens but also to facilitate effective management of Unlock's treasury resources.

##Proposal Overview
Our proposed action entails directing the accumulated fees towards the purchase of UDT tokens via an exchange, followed by the burning of these tokens to reduce the overall token supply. This initiative is designed to create a positive impact by diminishing the total UDT supply, It is very important to create a healthy and sustainable economy around the use of the protocol to ensure long-term exponential growth for the protocol and DAO resources.

##Fee Percentage
To initiate this process, we suggest setting the fee percentage at 1%. However, it's important to note that this value remains flexible and can be adjusted as deemed necessary in the future to adapt to changing circumstances or community preferences.

##Community Engagement
Prior to formalizing this proposal, we conducted extensive community engagement activities to gauge sentiment and gather feedback. This included utilizing Snapshot for temperature checking and initiating discussions on the Unlock forum to foster transparent dialogue and collaboration.
Snapshot Proposal: https://snapshot.org/#/unlock-protocol.eth/proposal/0xfb31abbb3ff6c8ef60bc3db9cd47adab0158ce1f955709f75cc2022b075dac8b
Forum Discussion: https://unlock.community/t/collect-fees-feature/484
Details of Functionality: https://github.com/unlock-protocol/unlock/blob/master/governance/proposals/002-set-protocol-fee.js

##Testing and Validation
Before proceeding with the formal proposal submission on Tally, rigorous internal testing has been conducted to ensure the seamless operation and effectiveness of the proposed functionality. These tests have provided confidence in the viability and correctness of the proposed action.

##Conclusion
In conclusion, by implementing this proposal, we aim to optimize the utility of Unlock Protocol's functionalities to benefit the UDT token ecosystem and the broader community. We believe that through strategic utilization of fee collection and supply reduction mechanisms, we can foster sustainable growth, enhance token value, and further empower our community members.`,
  }
  return proposalArgs
}

module.exports = main
