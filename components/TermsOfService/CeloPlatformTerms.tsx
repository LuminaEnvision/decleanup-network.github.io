import LegalSection, { LegalH3, LegalList, LegalNote } from "./LegalSection";

export default function CeloPlatformTerms() {
  return (
    <LegalSection
      id="celo"
      title="III. Celo platform (full rewards application)"
      subtitle="Applies when you use the DeCleanup Rewards web application and related APIs on Celo."
    >
      <p>
        <strong>Effective date:</strong> April 23, 2026
        <br />
        <strong>Operator:</strong> DeCleanup Network (“DeCleanup”, “we”, “us”, “our”)
        <br />
        <strong>Service:</strong> The DeCleanup Rewards web application at{" "}
        <a href="https://dapp.decleanup.net" className="text-[#58B12F] hover:underline">
          dapp.decleanup.net
        </a>{" "}
        and related APIs (collectively, the “Service”).
      </p>

      <LegalNote>
        <strong>Important: not legal advice.</strong> This document is a practical template for an early-stage web3 product. Laws vary by country and change over time. Have qualified counsel review these terms before relying on them for a production launch, fundraising, or regulated activities.
      </LegalNote>

      <p>
        Section I (General terms) applies to informational use of decleanup.net. This Section III governs your use of the Celo Service. If there is a conflict, this section controls for the Service.
      </p>

      <LegalH3>1. Acceptance</LegalH3>
      <p>
        By accessing or using the Service (including connecting a wallet, submitting a cleanup, signing transactions, or browsing the site), you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <LegalH3>2. Description of the Service</LegalH3>
      <p>The Service provides interfaces and APIs for:</p>
      <LegalList>
        <li>
          Submitting environmental cleanup evidence (for example photos, locations, optional forms) and interacting with{" "}
          <strong>smart contracts on Celo</strong> (for example <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">Submission</code>,{" "}
          <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">DCURewardManager</code>,{" "}
          <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">ImpactProductNFT</code>,{" "}
          <strong>$cDCU / ClaimVault</strong> as deployed for your environment).
        </li>
        <li>Optional features such as verifier workflows, leaderboards, Hypercerts-related flows, and machine-learning assistance where enabled.</li>
      </LegalList>
      <p>The Service is provided as-is and may change, pause, or end at any time.</p>

      <LegalH3>3. Eligibility (global)</LegalH3>
      <p>
        The Service is offered to users worldwide. You must be legally able to enter contracts where you live and at least 18 (or the age of majority there). You may not use the Service if you are barred under any law that applies to you. You are responsible for checking that your use of the Service is allowed in your location.
      </p>

      <LegalH3>4. Wallets, keys, and onchain risks</LegalH3>
      <LegalList>
        <li>
          <strong>Sign-in options:</strong> You may use Google or email (embedded smart account), MetaMask, or another WalletConnect wallet. Embedded wallets use a browser-held signing key and an ERC-4337 smart account; optional passkeys can gate unlock on your device.
        </li>
        <li>
          <strong>Self-custody:</strong> For external wallets, you control your keys. For embedded wallets, keys are generated and encrypted on your device; we do not hold your private keys on our servers. We cannot recover lost keys, passkeys, or backups or reverse most onchain transactions.
        </li>
        <li>
          <strong>Backups:</strong> You may export an encrypted backup from smart account settings. Losing your device, backup, and passkey may mean permanent loss of access.
        </li>
        <li>
          <strong>Gas:</strong> Embedded users may receive sponsored transactions through a third-party paymaster where enabled. External wallet users pay CELO gas themselves.
        </li>
        <li>
          <strong>Irreversibility:</strong> Onchain transactions can be public and permanent. Networks can congest or fail.
        </li>
        <li>
          <strong>Testnet vs mainnet:</strong> Deployments may point to test networks; tokens there may have no value. Verify the network shown in your wallet before signing.
        </li>
        <li>
          <strong>Smart contract risk:</strong> Contracts can contain bugs or be upgraded depending on deployment. Using onchain features is at your own risk.
        </li>
      </LegalList>

      <LegalH3>5. User conduct</LegalH3>
      <p>You agree not to:</p>
      <LegalList>
        <li>Submit false, misleading, or stolen evidence; harass others; or attempt to game verification.</li>
        <li>Violate laws; infringe others’ IP, privacy, or publicity rights.</li>
        <li>Attack or overload the Service (including scraping in a way that harms availability), probe for vulnerabilities without authorization, or circumvent rate limits or access controls.</li>
        <li>Use the Service to launder money, finance crime, or violate sanctions.</li>
      </LegalList>
      <p>We may suspend or block access where reasonably necessary to protect users, the Service, or legal compliance.</p>

      <LegalH3>6. Your content and license to operate</LegalH3>
      <p>
        You retain ownership of content you submit, but you grant DeCleanup a non-exclusive, worldwide, royalty-free license to host, process, transmit, display, and store your content solely to operate, improve, and secure the Service (including storing hashes or media on IPFS or similar systems, and writing metadata onchain where you choose to transact).
      </p>
      <p>You represent you have the rights needed to grant the above license for your submissions.</p>

      <LegalH3>7. Points, tokens, rewards, and governance</LegalH3>
      <LegalList>
        <li>DCU / participation metrics recorded onchain are not necessarily cash, securities, or a promise of future value.</li>
        <li>
          <strong>$cDCU (cDCU)</strong> may be minted through ClaimVault according to offchain signing rules you configure; amounts, caps, eligibility, and schedules can change and may differ between deployments.
        </li>
        <li>
          Governance features (if any) may require minimum balances or snapshots as described in product copy or project token documentation. These are not investment advice and do not create a fiduciary relationship.
        </li>
      </LegalList>
      <p>Nothing on the Service is an offer to sell or solicitation to buy any financial instrument in any jurisdiction.</p>

      <LegalH3>8. Third-party services</LegalH3>
      <p>
        The Service may rely on wallet providers, RPC hosts, IPFS / pinning, hosting, analytics, Supabase or other databases, ML / GPU endpoints, and block explorers. Their terms and privacy practices apply to your use of those services.
      </p>

      <LegalH3>9. Disclaimers</LegalH3>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
      </p>

      <LegalH3>10. Limitation of liability</LegalH3>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> DEcleanup AND ITS CONTRIBUTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE OR BLOCKCHAIN INTERACTIONS.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICE IS LIMITED TO THE GREATER OF (A) USD $100 OR (B) THE AMOUNTS YOU PAID US IN FEES FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM (if any).
      </p>
      <p>Some jurisdictions do not allow certain limitations; in those cases, the limitations apply to the fullest extent allowed.</p>

      <LegalH3>11. Indemnity</LegalH3>
      <p>
        You will defend and indemnify DeCleanup and its affiliates, contributors, and personnel against claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your use of the Service, your content, or your violation of these Terms or law.
      </p>

      <LegalH3>12. Privacy</LegalH3>
      <p>
        Our Privacy Policy describes how we handle personal data when published (for example at <strong>/privacy</strong> on the deployed site or in project documentation). Until a dedicated policy is linked here, contact us using the channels in Section 14.
      </p>

      <LegalH3>13. Changes</LegalH3>
      <p>
        We may update these Terms by posting a revised version with a new effective date. Continued use after the effective date constitutes acceptance. Material changes may also be announced in the app or repository where practical.
      </p>

      <LegalH3>14. Global users; law and disputes</LegalH3>
      <p>
        DeCleanup is a global project. These Terms are not written for a single country. Mandatory consumer, contract, or privacy rights under the laws of your country of residence stay in effect and are not waived by anything here.
      </p>
      <LegalList>
        <li>
          <strong>Your obligations:</strong> You must comply with all laws that apply to you (including sanctions, environmental reporting, tax, and content rules) when using the Service.
        </li>
        <li>
          <strong>Informal resolution:</strong> For any dispute, you and DeCleanup should first try to resolve it in good faith using the Contact method below.
        </li>
        <li>
          <strong>Courts:</strong> If informal resolution fails, claims may be brought only in courts or tribunals that have jurisdiction under applicable law (including rules that depend on where you live, where the harm occurred, or where a defendant may be sued). Nothing here picks one exclusive “home” country for all users worldwide. Where the law of your country requires a specific venue or process for consumers, that law controls for you.
        </li>
      </LegalList>
      <p>Have counsel review this section if you later elect a single governing law and forum for B2B contracts only; keep consumer protections clear.</p>

      <LegalH3>15. Contact</LegalH3>
      <p>
        Use the official support or legal contact published on{" "}
        <a href="https://decleanup.net" className="text-[#58B12F] hover:underline">
          decleanup.net
        </a>{" "}
        or in the deployed application (for example footer links). Replace this sentence with a concrete email or ticket URL when you publish a dedicated address.
      </p>

      <p className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
        By using the Service, you acknowledge that you have read and understood these Terms.
      </p>
    </LegalSection>
  );
}
