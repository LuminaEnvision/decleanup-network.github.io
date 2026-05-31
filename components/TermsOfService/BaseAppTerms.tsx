import LegalSection, { LegalH3, LegalList, LegalNote } from "./LegalSection";

export default function BaseAppTerms() {
  return (
    <LegalSection
      id="base"
      title="II. Base application (DeCleanup Rewards on Base)"
      subtitle="Applies to the DeCleanup Rewards application on Base, including the Farcaster Mini App and related web properties."
    >
      <p>
        <strong>Last updated:</strong> May 2026
        <br />
        <strong>Operator:</strong> DeCleanup Network (“DeCleanup”, “we”, “us”, “our”)
      </p>

      <p>
        Section I (General terms) applies to informational use of decleanup.net. This Section II governs your use of the Base Services described below. If there is a conflict, this section controls for those Services.
      </p>

      <LegalNote>
        Our smart contracts are upgradeable using the UUPS (Universal Upgradeable Proxy Standard) pattern. This allows us to fix bugs, add features, and improve the system while maintaining user data and balances. All upgrades are subject to proper governance and security measures.
      </LegalNote>

      <LegalH3>1. Introduction</LegalH3>
      <p>
        Welcome to DeCleanup Rewards. These Terms of Service (“Terms”) govern your access to and use of the DeCleanup Rewards application and services (collectively, the “Services”), including our Farcaster Mini App at{" "}
        <a href="https://miniapp.decleanup.net" className="text-[#58B12F] hover:underline">
          miniapp.decleanup.net
        </a>{" "}
        and related web properties. The Services enable users to document environmental cleanups, earn DCU points, claim $bDCU tokens, and participate in onchain verification and rewards.
      </p>
      <p>
        By accessing or using our Services, you agree to be bound by these Terms and our{" "}
        <a href="/privacy" className="text-[#58B12F] hover:underline">
          Privacy Policy
        </a>
        . If you do not agree to these Terms, please do not use our Services.
      </p>

      <LegalH3>2. About our Services</LegalH3>
      <p>DeCleanup Rewards is an onchain application built on Base that enables users to:</p>
      <LegalList>
        <li>Document environmental cleanups through photo submissions</li>
        <li>Receive verification of cleanup activities</li>
        <li>Earn DCU points for various actions (cleanups, streaks, referrals, verifications)</li>
        <li>Claim $bDCU tokens using accumulated DCU points</li>
        <li>Earn Impact Products (dynamic NFTs) that represent verified environmental impact</li>
        <li>Stake $bDCU tokens to become a verifier</li>
        <li>Participate in a community-driven environmental verification system</li>
        <li>Access the app as a Farcaster Mini App, in the Base app, or via a standard web browser with a connected wallet</li>
      </LegalList>
      <p>
        $bDCU is DeCleanup&apos;s liquid action token on Base, deployed via{" "}
        <a
          href="https://www.clanker.world/clanker/0x30171b7014c02229497CdE6745DD3aD821F12b07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#58B12F] hover:underline"
        >
          Clanker
        </a>
        . You may earn $bDCU through verified cleanups in the app or acquire it on supported markets. Token prices are determined by market forces and are not guaranteed by us.
      </p>
      <p>
        Our Services are built on Base, an Ethereum Layer 2 network incubated at Coinbase with a commitment to decentralization. DeCleanup Rewards operates independently and is not affiliated with, endorsed by, or in partnership with Base, Coinbase, Farcaster, or Clanker.
      </p>

      <LegalH3>3. Eligibility</LegalH3>
      <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that:</p>
      <LegalList>
        <li>You are at least 18 years of age</li>
        <li>You have the legal capacity to enter into these Terms</li>
        <li>You are not located in a jurisdiction where use of our Services is prohibited</li>
        <li>You will comply with all applicable laws and regulations</li>
      </LegalList>

      <LegalH3>4. User accounts and wallet connection</LegalH3>
      <p>To use certain features of our Services, you may need to connect a cryptocurrency wallet. When you connect your wallet:</p>
      <LegalList>
        <li>You are responsible for maintaining the security of your wallet and private keys</li>
        <li>We do not store, have access to, or control your wallet or private keys</li>
        <li>You are solely responsible for all transactions initiated through your connected wallet</li>
        <li>You acknowledge that transactions on Base are irreversible</li>
        <li>You must ensure your wallet is connected to the Base network (mainnet or testnet)</li>
        <li>When using the Farcaster Mini App, your wallet may be connected automatically through the Farcaster or Base client</li>
      </LegalList>

      <LegalH3>5. Cleanup submissions</LegalH3>
      <p>When you submit cleanup documentation through our Services:</p>
      <LegalList>
        <li>You represent that all photos and information you submit are accurate and truthful</li>
        <li>You represent that the cleanup activities documented actually occurred</li>
        <li>You grant us a license to use, display, and store your submissions for the purpose of providing our Services</li>
        <li>You understand that submissions are subject to verification by our community verifiers</li>
        <li>You acknowledge that false or misleading submissions may result in rejection and potential suspension of your account</li>
        <li>
          Submitting a cleanup does not require a fee (submission fee stays 0). A small claim fee may apply when claiming your Impact Product; the app shows the amount before you press Claim Level or Claim Impact Product
        </li>
        <li>Photos are stored on IPFS (InterPlanetary File System) and cannot be deleted once submitted</li>
      </LegalList>

      <LegalH3>6. DCU points and $bDCU token rewards</LegalH3>
      <p className="font-semibold text-black dark:text-white mt-4">DCU points system</p>
      <p>DeCleanup Rewards uses a points-based reward system:</p>
      <LegalList>
        <li>
          <strong>DCU points</strong> are earned for various actions:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Cleanup submission (verified): 10 points</li>
            <li>Streak maintenance: 1 point</li>
            <li>Referral (both parties): 3 points each</li>
            <li>Verification activity: 1 point</li>
            <li>Manual/retroactive rewards: variable (admin-awarded)</li>
          </ul>
        </li>
        <li>Points are tracked onchain and cannot be transferred between users</li>
        <li>Points can be claimed for $bDCU tokens after reaching Level 3 (minimum 30 DCU points required)</li>
        <li>The actual USD value of points is determined at claim time based on current token price and multipliers</li>
        <li>Points values and multipliers may be adjusted by administrators</li>
      </LegalList>

      <p className="font-semibold text-black dark:text-white mt-4">$bDCU token claims</p>
      <p>To claim tokens, you must:</p>
      <LegalList>
        <li>Have accumulated at least 30 DCU points (minimum claim amount)</li>
        <li>Reach Impact Product Level 3 (minimum requirement)</li>
        <li>Have sufficient contract balance available for claims</li>
      </LegalList>
      <p>Claim amount is calculated based on:</p>
      <LegalList>
        <li>Your accumulated DCU points (minimum 30 points)</li>
        <li>Current market price of $bDCU tokens (8 decimals)</li>
        <li>Target reward value (configurable, typically $0.50 per cleanup equivalent)</li>
        <li>Point multipliers (may vary by action type)</li>
      </LegalList>
      <LegalList>
        <li>Token claims are irreversible onchain transactions</li>
        <li>Claim amounts may vary based on token price fluctuations</li>
        <li>We do not guarantee any specific token value or USD equivalent</li>
      </LegalList>

      <p className="font-semibold text-black dark:text-white mt-4">Impact Products (NFTs)</p>
      <LegalList>
        <li>Impact Products are non-fungible tokens (NFTs) that represent verified environmental cleanup activities</li>
        <li>Impact Products are digital collectibles that represent your environmental impact</li>
        <li>Impact Products are not securities, investments, or financial instruments</li>
        <li>Impact Products have no inherent monetary value and are not guaranteed to have any value</li>
        <li>Impact Products are transferable NFTs (ERC-721 standard)</li>
        <li>Impact Products evolve through 10 progressive levels (Newbie → Guardian)</li>
        <li>The distribution of Impact Products is subject to verification of cleanup activities</li>
      </LegalList>

      <LegalH3>7. Staking and verifier system</LegalH3>
      <p className="font-semibold text-black dark:text-white">Staking requirements</p>
      <p>To become a verifier through staking, you must:</p>
      <LegalList>
        <li>Reach Impact Product Level 3</li>
        <li>Stake at least 51% of your available $bDCU token balance at the time of staking</li>
        <li>Maintain staked balance above 50% of original stake to retain verifier status (unless manually added by admin)</li>
      </LegalList>
      <p className="font-semibold text-black dark:text-white mt-4">Verifier status</p>
      <LegalList>
        <li>Verifiers can review and approve/reject cleanup submissions</li>
        <li>Verifiers earn DCU points (1 point) for each verification</li>
        <li>Verifier status may be granted manually by administrators (bypasses staking requirement and persists even after unstaking)</li>
        <li>Verifier status may be revoked for fraudulent or manipulative behavior (via slashing mechanism)</li>
        <li>Staked tokens are locked until unstaked (unstaking may result in loss of verifier status if not manually added)</li>
      </LegalList>

      <LegalH3>8. Verification process</LegalH3>
      <p>Our Services include a community-driven verification system where verified users review cleanup submissions. By participating as a verifier:</p>
      <LegalList>
        <li>You agree to review submissions fairly and objectively</li>
        <li>You agree not to engage in fraudulent or manipulative verification practices</li>
        <li>You understand that verification decisions are final and binding</li>
        <li>You acknowledge that false or malicious verification may result in suspension of your account and loss of verifier status</li>
        <li>You may earn DCU points for verification activities</li>
      </LegalList>

      <LegalH3>9. Fees</LegalH3>
      <p>
        We do not charge a fee for submitting cleanups (submission fee stays 0). A small claim fee may apply when claiming your Impact Product NFT; the app always shows the exact amount (in ETH) before you press Claim Level or Claim Impact Product.
      </p>
      <p className="font-semibold text-black dark:text-white mt-4">Submission fees</p>
      <p>
        <strong>Submission fee is 0.</strong> We do not charge a fee for submitting cleanups.
      </p>
      <p className="font-semibold text-black dark:text-white mt-4">Claim fees (Impact Product NFT)</p>
      <LegalList>
        <li>A small claim fee may be charged when claiming your Impact Product NFT after a cleanup is verified (if enabled by the contract)</li>
        <li>
          The app displays the claim fee (if any) before you press &quot;Claim Level&quot; or &quot;Claim Impact Product&quot;, so you always see it first
        </li>
        <li>Fees are paid in ETH and are non-refundable</li>
        <li>Fee amounts and status may be changed by administrators</li>
      </LegalList>
      <p className="font-semibold text-black dark:text-white mt-4">Network fees</p>
      <LegalList>
        <li>All onchain transactions require payment of network fees (gas) in ETH</li>
        <li>Network fees are paid directly to the Base network, not to us</li>
        <li>Network fees are non-refundable and vary based on network conditions</li>
      </LegalList>

      <LegalH3>10. User conduct</LegalH3>
      <p>You agree not to:</p>
      <LegalList>
        <li>Submit false, misleading, or fraudulent information</li>
        <li>Engage in any activity that violates applicable laws or regulations</li>
        <li>Attempt to manipulate or game the verification, points, or rewards system</li>
        <li>Use automated systems or bots to interact with our Services</li>
        <li>Interfere with or disrupt the Services or servers</li>
        <li>Use our Services for any illegal or unauthorized purpose</li>
        <li>Violate the intellectual property rights of others</li>
        <li>Transmit any malicious code, viruses, or harmful content</li>
        <li>Attempt to claim tokens or stake without meeting minimum requirements</li>
        <li>Engage in wash trading or other market manipulation of $bDCU tokens</li>
      </LegalList>

      <LegalH3>11. Intellectual property</LegalH3>
      <p>
        The Services, including all content, features, and functionality, are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not:
      </p>
      <LegalList>
        <li>Copy, modify, or create derivative works of our Services</li>
        <li>Use our trademarks, logos, or branding without our prior written consent</li>
        <li>Remove any copyright or proprietary notices from our Services</li>
      </LegalList>

      <LegalH3>12. Disclaimers</LegalH3>
      <p>
        <strong>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </strong>
      </p>
      <p>We do not warrant that:</p>
      <LegalList>
        <li>The Services will be uninterrupted, secure, or error-free</li>
        <li>Any defects or errors will be corrected</li>
        <li>The Services are free of viruses or other harmful components</li>
        <li>The results obtained from using the Services will be accurate or reliable</li>
        <li>DCU points or $bDCU tokens will have any specific value</li>
        <li>Token prices will remain stable or increase</li>
        <li>You will be able to claim tokens at any specific time</li>
        <li>The app will remain listed or discoverable in Farcaster, Base, or other third-party app directories at all times</li>
      </LegalList>
      <p className="font-semibold text-black dark:text-white mt-4">Important disclaimers</p>
      <LegalList>
        <li>
          <strong>DCU points:</strong> DCU points are not securities, investments, or financial instruments. Points have no guaranteed value and may be adjusted or modified by administrators.
        </li>
        <li>
          <strong>$bDCU tokens:</strong> $bDCU tokens are cryptocurrency tokens that may fluctuate in value. Token prices are determined by market forces and are not controlled by us.
        </li>
        <li>
          <strong>No investment advice:</strong> Nothing in our Services constitutes investment, financial, or trading advice. You should conduct your own research before making any decisions.
        </li>
        <li>
          <strong>No guarantees:</strong> We do not guarantee that you will earn any specific amount of points or tokens, or that points or tokens will have any value.
        </li>
      </LegalList>

      <LegalH3>13. Limitation of liability</LegalH3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
      </p>
      <LegalList>
        <li>Your use or inability to use the Services</li>
        <li>Any unauthorized access to or use of our servers or your personal information</li>
        <li>Any interruption or cessation of transmission to or from our Services</li>
        <li>Any bugs, viruses, trojan horses, or the like that may be transmitted through our Services</li>
        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
        <li>Loss of DCU points or $bDCU tokens due to user error, network issues, or contract interactions</li>
        <li>Fluctuations in token prices or inability to claim tokens at desired prices</li>
        <li>Changes to points values, multipliers, or reward structures</li>
        <li>Removal or unavailability of the app from Farcaster, Base, or other third-party platforms</li>
      </LegalList>

      <LegalH3>14. Indemnification</LegalH3>
      <p>
        You agree to indemnify, defend, and hold harmless us, our affiliates, and our respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with:
      </p>
      <LegalList>
        <li>Your access to or use of the Services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any rights of another party</li>
        <li>Your violation of any applicable laws or regulations</li>
        <li>Your fraudulent or manipulative use of the points or rewards system</li>
      </LegalList>

      <LegalH3>15. Third-party services</LegalH3>
      <p>Our Services may integrate with or link to third-party services, including:</p>
      <LegalList>
        <li>Base network and blockchain infrastructure</li>
        <li>Wallet providers (such as MetaMask, Coinbase Wallet, Farcaster wallets, or WalletConnect)</li>
        <li>IPFS storage providers (Pinata)</li>
        <li>Farcaster and Base Mini App clients</li>
        <li>Clanker and other token/market infrastructure</li>
        <li>Other onchain services and protocols</li>
      </LegalList>
      <p>
        We are not responsible for the availability, accuracy, or practices of any third-party services. Your interactions with third-party services are solely between you and the third party.
      </p>

      <LegalH3>16. Compliance with laws</LegalH3>
      <p>
        You are solely responsible for ensuring that your use of our Services complies with all applicable laws and regulations in your jurisdiction, including but not limited to:
      </p>
      <LegalList>
        <li>Sanctions laws and regulations</li>
        <li>Anti-money laundering laws</li>
        <li>Tax laws and reporting requirements (including reporting of token rewards and claims)</li>
        <li>Environmental regulations</li>
        <li>Data protection and privacy laws</li>
        <li>Securities laws (DCU points and $bDCU tokens are not securities, but you are responsible for compliance)</li>
      </LegalList>

      <LegalH3>17. Modifications to the Services</LegalH3>
      <p>We reserve the right to:</p>
      <LegalList>
        <li>Modify, suspend, or discontinue the Services at any time</li>
        <li>Change, update, or remove features or functionality</li>
        <li>Adjust DCU point values, multipliers, or reward structures</li>
        <li>Change token prices, target reward values, or claim formulas</li>
        <li>Modify staking requirements or verifier criteria</li>
        <li>Impose limits on certain features or restrict access to parts of the Services</li>
        <li>Change fees or payment terms (with reasonable notice)</li>
        <li>Pause or unpause contract functionality for maintenance or emergencies</li>
      </LegalList>

      <LegalH3>18. Termination</LegalH3>
      <p>
        We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
      </p>
      <LegalList>
        <li>Your right to use the Services will cease immediately</li>
        <li>You may lose access to accumulated DCU points (points remain onchain but you may lose access to claim them)</li>
        <li>Staked tokens remain locked according to contract terms</li>
        <li>Impact Products remain in your wallet as NFTs</li>
      </LegalList>

      <LegalH3>19. Governing law and dispute resolution</LegalH3>
      <p>
        These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Where mandatory consumer protection laws in your jurisdiction apply, those laws take precedence over any conflicting provision in these Terms.
      </p>
      <p>
        Any disputes arising out of or relating to these Terms or the Services should first be raised with us through the contact channels below. If a dispute cannot be resolved informally, it shall be resolved through binding arbitration or courts of competent jurisdiction as permitted by applicable law.
      </p>

      <LegalH3>20. Changes to these Terms</LegalH3>
      <p>
        We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms at{" "}
        <a href="https://miniapp.decleanup.net/terms" className="text-[#58B12F] hover:underline">
          miniapp.decleanup.net/terms
        </a>{" "}
        and on this page, and updating the &quot;Last updated&quot; date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
      </p>

      <LegalH3>21. Severability</LegalH3>
      <p>
        If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
      </p>

      <LegalH3>22. Entire agreement</LegalH3>
      <p>
        These Terms constitute the entire agreement between you and us regarding the use of our Services on Base and supersede all prior agreements and understandings for those Services.
      </p>

      <LegalH3>23. Contact information</LegalH3>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <LegalList>
        <li>
          <strong>Website:</strong>{" "}
          <a href="https://decleanup.net" className="text-[#58B12F] hover:underline">
            decleanup.net
          </a>{" "}
          ·{" "}
          <a href="https://miniapp.decleanup.net" className="text-[#58B12F] hover:underline">
            miniapp.decleanup.net
          </a>
        </li>
        <li>
          <strong>Farcaster:</strong>{" "}
          <a href="https://farcaster.xyz/decleanup" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:underline">
            @decleanup
          </a>
        </li>
        <li>
          <strong>Telegram:</strong>{" "}
          <a href="https://t.me/DecentralizedCleanup" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:underline">
            t.me/DecentralizedCleanup
          </a>
        </li>
      </LegalList>

      <LegalNote>
        These Terms of Service are designed to comply with Base&apos;s editorial style guide and requirements. DeCleanup Rewards is built on Base and follows Base&apos;s guidelines for onchain applications. We use the term &quot;onchain&quot; (not &quot;web3&quot; or &quot;crypto&quot;) and refer to Base (not BASE, Base Chain, $BASE, or Base Network) in accordance with Base&apos;s branding guidelines.
      </LegalNote>
    </LegalSection>
  );
}
