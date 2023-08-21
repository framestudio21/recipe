import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./styles/privacy.module.css";

export default dynamic(() => Promise.resolve(Privacypolicy), { ssr: false });
function Privacypolicy() {
  return (
    <div className={styles.privacypolicy}>
      <h1 className={styles.heading1}>Privacy Policy</h1>
      <p className={styles.date}>Effective Date: June 23, 2023</p>

      <p className={styles.paragraph}>
        At Dotdash Meredith, we take privacy seriously and we respect the
        privacy concerns of our community of users. This Privacy Policy (the
        “Privacy Policy”) describes how the Dotdash Meredith publishing family
        and any other digital properties that link to this Privacy Policy
        (collectively, the “Company,” “we,” “us,” or “our”) collect, use,
        disclose, and otherwise process personal information in connection with
        our websites (the “Sites”), mobile applications (the “Apps”), and the
        related content, services, products, and other features and
        functionality offered on or through those Sites and Apps (collectively,
        the “Services”).
      </p>

      <h2 className={styles.heading2}>Manage Your Information</h2>

      <h4 className={styles.heading4}>Email Preferences</h4>
      <p className={styles.paragraph}>
        Opt-out of marketing e-mails globally (i.e., across our brands) by
        clicking on the following link and filling out the form accordingly.
        <br />
        <Link href="#" className={styles.url}>
          Update Email Preferences
        </Link>
      </p>

      <h4 className={styles.heading4}>Delete Your Data</h4>
      <p className={styles.paragraph}>
        Permanently delete your information.
        <br />
        <Link href="#" className={styles.url}>
          Update Data Preferences
        </Link>
      </p>

      <h4 className={styles.heading4}>Control Over Your Data</h4>
      <p className={styles.paragraph}>
        For additional ways to delete, opt out, or manage your information,
        please see the "
        <Link href="#" className={styles.url}>
          What Controls Do I Have Over My Information?
        </Link>
        " section of this Privacy Policy.
      </p>

      <h2 className={styles.heading2}>
        What Personal Information Do We Collect?
      </h2>

      <h3 className={styles.heading3}>Information You Provide to Us</h3>
      <p className={styles.paragraph}>
        The personal information we collect from, and about, you may vary
        depending on how you engage with our Services and the information you
        provide voluntarily. We may collect personal information directly from
        you or otherwise in connection with your use of the Services, such as:
      </p>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <strong>Contact Information</strong>, including your name, contact
          details (such as a postal address and email address), event or
          conference registration and related information (including dietary
          restrictions or photos and videos taken at events), and communication
          preferences.
        </li>
        <li className={styles.list}>
          <strong>Inquiry Information</strong>, including information provided
          in messages sent through forms or surveys, to our email addresses, or
          via phone. This also may include information provided when you sign up
          for our newsletters.
        </li>
        <li className={styles.list}>
          <strong>Account Information</strong>, including name, username,
          account ID, date of birth, contact information, profile information,
          saved, “liked,” or bookmarked items (e.g., articles or recipes),
          payment and purchase history information, subscription information,
          courses enrolled in and completed, and Stock Simulator results.
        </li>
        <li className={styles.list}>
          <strong>Financial Information</strong>, including credit and debit
          card information, bank account and routing number, and billing and
          shipping address.
        </li>
        <li className={styles.list}>
          <strong>Demographic Information</strong>, including age, gender, race,
          income, occupation, marital status, and information about your
          household/family status, including your household size and the length
          of time at your residence.
        </li>
        <li className={styles.list}>
          <strong>Health- or Fitness-Related Information</strong>, including
          exercise and activity levels, weight-loss objectives, dietary
          preferences, and other health and wellness information.
        </li>
        <li className={styles.list}>
          <strong>User-Generated Content</strong>, including personal
          information you choose to provide about yourself when you participate
          in forums or discussions on the Services, post comments or reviews,
          and participate in any Services. Please be aware that information you
          post may be viewed, used, or captured by anyone who visits the
          Services, therefore, you should avoid posting sensitive personal
          information that you would not want to be available to the public.
        </li>
        <li className={styles.list}>
          <strong>Contest, Sweepstakes, and Survey Information</strong>,
          including information provided when you enter a contest or
          sweepstakes, information included in any responses submitted through
          surveys or questionnaires, or the content of any testimonials.
        </li>
        <li className={styles.list}>
          <strong>
            Inferences About Your Interests, Preferences, and Other Behavioral
            Data,
          </strong>
          , including hobbies, interests, and characteristics, e.g., your
          favorite foods, purchases, or recipes, consuming tendencies, and
          health and fitness information.
        </li>
      </ul>
      <h2>Information Automatically Collected</h2>
      <h3>General</h3>
      <p className={styles.paragraph}>
        As is true of many digital properties, we and our third-party partners
        may automatically collect information you provide to us and information
        about your device and use of the Service when you visit or interact with
        our Services. We, and our third-party partners, use cookies and other
        tracking technologies (e.g., pixels, SDKs, APIs, scripts,
        location-identifying technologies, and logging technologies) in
        connection with our Services to collect and store the information
        described in this section (and otherwise expanded upon in other
        sections) for our, and our third-party partners’, purposes.
      </p>

      <p>The type of information automatically collected includes:</p>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <strong>Device data</strong>, including internet protocol (IP)
          address, operating system, device type and version, browser type and
          version, browser id, the URL entered, the referring page, date/time of
          visit, other user agent string data, the time spent on our Services,
          and any errors that may occur during the visit to our Services. Device
          data may overlap with the other categories of data listed below.
        </li>
        <li className={styles.list}>
          <strong>Analytics/Usage data</strong>, including the path taken to our
          Services, through our Services, and when exiting our Services, usage
          and activity on or in connection with our Services (e.g., pages
          visited, links clicked, videos watched), metrics on how many emails we
          send are actually opened and which attachments or links are opened,
          clicked, or viewed (such as via pixels, as described further below).
          We may also use third-party tools to collect information you provide
          to us or information about how you use the Services, including mouse
          movements, scrolling, clicks, and keystroke activity on the Services
          and other browsing, search, or purchasing behavior. These tools may
          also record information you enter when you interact with our Services
          or engage in chat or other features through our Services.
        </li>
        <li className={styles.list}>
          <strong>Location data</strong>, including geographic location we or
          our third-party providers may collect, such as via permissions within
          the app operating system or browser functionality.
        </li>
        <li className={styles.list}>
          <strong>Advertising/Advertising measurement data</strong>, including
          data associated with your view of, or your clicks on, advertisements
          served on our Services, cookie IDs or other digital or proprietary
          identifiers (e.g., iOS IDFA, Google AAID) assigned to such device, and
          device metadata, analytics/usage data, and location data described
          above, in each case, for purposes of serving advertising (personalized
          or otherwise) or facilitating advertising measurement/attribution to
          better optimize or otherwise understand the effectiveness of ad
          campaigns. For more information on our and third-party partners’ data
          collection and online advertising practices, please see the “<Link href="#" className={styles.url}>What are
          Our Third-Party Data Collection and Online Advertising Practices?</Link>”
          section of this Privacy Policy. Note that we and our third-party
          partners may combine information that each of us collects
          automatically with other information about you, including information
          you choose to provide. See the “<Link href="#" className={styles.url}>What Controls Do I Have Over My
          Information?</Link>” section below to learn more about how you may limit or
          disable cookies or certain other tracking technologies on your device.
          For more information about how we and our third-party partners use
          these technologies and data for advertising purposes, please see “<Link href="#" className={styles.url}>What
          are Our Third-Party Data Collection and Online Advertising Practices?</Link>”
          below.
        </li>
        <li className={styles.list}>
          <strong>....</strong>
        </li>
      </ul>
    </div>
  );
}
