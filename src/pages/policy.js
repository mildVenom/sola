import React from 'react'
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";

function policy() {
        return (
                <main>
                        <Navigation />
                        <div className="max-w-4xl mx-auto px-4 py-8">
                                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                                <p className="text-sm text-gray-500 mb-4">Last updated April 17, 2024</p>

                                <section className="mb-8">
                                        <p className="text-lg mb-4">
                                                This Privacy Notice for The School of Life Art ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>Download and use our mobile application (Go Planner), or any other application of ours that links to this Privacy Notice</li>
                                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                                        </ul>
                                        <p className="mb-4">
                                                Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@theschooloflifeart.com" className="text-blue-600 hover:underline">info@theschooloflifeart.com</a>.
                                        </p>
                                </section>

                                <section className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Summary of Key Points</h2>
                                        <p className="mb-4">
                                                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                                        </p>
                                        <ul className="list-disc list-inside pl-4">
                                                <li>
                                                        <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <a href="#personal-information" className="text-blue-600 hover:underline">Learn more</a>
                                                </li>
                                                <li>
                                                        <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                                                </li>
                                                <li>
                                                        <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                                                </li>
                                                <li>
                                                        <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. <a href="#processing-information" className="text-blue-600 hover:underline">Learn more</a>
                                                </li>
                                                <li>
                                                        <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. <a href="#sharing-information" className="text-blue-600 hover:underline">Learn more</a>
                                                </li>
                                                <li>
                                                        <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. <a href="#keeping-safe" className="text-blue-600 hover:underline">Learn more</a>
                                                </li>
                                                <li>
                                                        <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <a href="#privacy-rights" className="text-blue-600 hover:underline">Learn more</a>
                                                </li>
                                                <li>
                                                        <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="https://www.theschooloflifeart.com/policy" className="text-blue-600 hover:underline">our policy page</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                                                </li>
                                        </ul>
                                </section>

                                <section className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
                                        <ol className="list-decimal list-inside pl-4">
                                                <li><a href="#information-collection" className="text-blue-600 hover:underline">What Information Do We Collect?</a></li>
                                                <li><a href="#processing-information" className="text-blue-600 hover:underline">How Do We Process Your Information?</a></li>
                                                <li><a href="#legal-bases" className="text-blue-600 hover:underline">What Legal Bases Do We Rely On To Process Your Personal Information?</a></li>
                                                <li><a href="#sharing-information" className="text-blue-600 hover:underline">When And With Whom Do We Share Your Personal Information?</a></li>
                                                <li><a href="#cookies" className="text-blue-600 hover:underline">Do We Use Cookies and Other Tracking Technologies?</a></li>
                                                <li><a href="#social-logins" className="text-blue-600 hover:underline">How Do We Handle Your Social Logins?</a></li>
                                                <li><a href="#data-retention" className="text-blue-600 hover:underline">How Long Do We Keep Your Information?</a></li>
                                                <li><a href="#data-security" className="text-blue-600 hover:underline">How Do We Keep Your Information Safe?</a></li>
                                                <li><a href="#privacy-rights" className="text-blue-600 hover:underline">What Are Your Privacy Rights?</a></li>
                                                <li><a href="#do-not-track" className="text-blue-600 hover:underline">Controls for Do-Not-Track Features</a></li>
                                                <li><a href="#us-residents" className="text-blue-600 hover:underline">Do United States Residents Have Specific Privacy Rights?</a></li>
                                                <li><a href="#regional-rights" className="text-blue-600 hover:underline">Do Other Regions Have Specific Privacy Rights?</a></li>
                                                <li><a href="#updates" className="text-blue-600 hover:underline">Do We Make Updates to This Notice?</a></li>
                                                <li><a href="#contact" className="text-blue-600 hover:underline">How Can You Contact Us About This Notice?</a></li>
                                                <li><a href="#data-review" className="text-blue-600 hover:underline">How Can You Review, Update, or Delete the Data We Collect from You?</a></li>
                                        </ol>
                                </section>

                                <section id="information-collection" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">1. What Information Do We Collect?</h2>
                                        <p className="text-lg mb-4">
                                                <strong>Personal information you disclose to us</strong>
                                        </p>
                                        <p className="mb-4">
                                                In Short: We collect personal information that you provide to us.
                                        </p>
                                        <p className="mb-4">
                                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>Passwords</li>
                                                <li>Usernames</li>
                                                <li>Email addresses</li>
                                                <li>Names</li>
                                                <li>Phone numbers</li>
                                                <li>Mailing addresses</li>
                                                <li>Contact or authentication data</li>
                                                <li>Billing addresses</li>
                                        </ul>
                                        <p className="text-lg mb-4">
                                                <strong>Sensitive Information</strong>
                                        </p>
                                        <p className="mb-4">We do not process sensitive information.</p>
                                        <p className="text-lg mb-4">
                                                <strong>Payment Data</strong>
                                        </p>
                                        <p className="mb-4">
                                                We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by PayPal and M-Pesa. You may find their privacy notice link(s) here: <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" className="text-blue-600 hover:underline">PayPal Privacy Notice</a>, <a href="https://www.mpesa.co.ke/PrivacyPolicy" className="text-blue-600 hover:underline">M-Pesa Privacy Notice</a>.
                                        </p>

                                        <p className="text-lg mb-4">
                                                <strong>Social Media Login Data.</strong>
                                        </p>
                                        <p className="mb-4">
                                                We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called
                                                <a href="#social-logins" className="text-blue-600 hover:underline"> HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                                                </a>.
                                                below.
                                        </p>
                                </section>
                                <section id="application-data" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Application Data</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We may collect certain information from your mobile device when you use our applications.
                                        </p>
                                        <p className="mb-4">
                                                If you use our application(s), we may collect the following information if you choose to provide us with access or permission:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>
                                                        <strong>Geolocation Information:</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
                                                </li>
                                                <li>
                                                        <strong>Mobile Device Data:</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.
                                                </li>
                                                <li>
                                                        <strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                                                </li>
                                        </ul>
                                        <p className="mb-4">
                                                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                                        </p>
                                        <p className="mb-4">
                                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                                        </p>
                                </section>

                                <section id="information-collection" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Information Automatically Collected</h2>
                                        <p className="text-lg mb-4">
                                                In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                                        </p>
                                        <p className="mb-4">
                                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                                        </p>
                                        <p className="text-lg mb-4">
                                                <strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                                        </p>
                                        <p className="text-lg mb-4">
                                                <strong>Device Data:</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                                        </p>
                                        <p className="text-lg mb-4">
                                                <strong>Location Data:</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                                        </p>
                                </section>

                                <section id="processing-information" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">How Do We Process Your Information?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                                        </p>
                                        <p className="mb-4">
                                                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                                        </ul>
                                </section>

                                <section id="legal-bases" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">What Legal Bases Do We Rely On To Process Your Information?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                                        </p>
                                        <p className="mb-4">
                                                If you are located in Canada, this section applies to you.
                                        </p>
                                        <p className="mb-4">
                                                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
                                        </p>
                                        <p className="mb-4">
                                                In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                                                <li>For investigations and fraud detection and prevention</li>
                                                <li>For business transactions provided certain conditions are met</li>
                                                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                                                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                                                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                                                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                                                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                                                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                                                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                                                <li>If the information is publicly available and is specified by the regulations</li>
                                        </ul>
                                </section>

                                <section id="sharing-information" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">When and With Whom Do We Share Your Personal Information?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We may share information in specific situations described in this section and/or with the following third parties.
                                        </p>
                                        <p className="mb-4">
                                                We may need to share your personal information in the following situations:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                                <li><strong>When we use Google Maps Platform APIs:</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.</li>
                                                <li><strong>Offer Wall:</strong> Our application(s) may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
                                        </ul>
                                </section>

                                <section id="tracking-technologies" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Do We Use Cookies and Other Tracking Technologies?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We may use cookies and other tracking technologies to collect and store your information.
                                        </p>
                                        <p className="mb-4">
                                                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                                        </p>
                                        <p className="mb-4">
                                                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                                        </p>
                                        <p className="mb-4">
                                                To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "Do United States Residents Have Specific Privacy Rights?"
                                        </p>
                                        <p className="mb-4">
                                                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                                        </p>
                                </section>

                                <section id="social-logins" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">How Do We Handle Your Social Logins?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
                                        </p>
                                        <p className="mb-4">
                                                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                                        </p>
                                        <p className="mb-4">
                                                We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                                        </p>
                                </section>

                                <section id="data-retention" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">How Long Do We Keep Your Information?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                                        </p>
                                        <p className="mb-4">
                                                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                                        </p>
                                        <p className="mb-4">
                                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                        </p>
                                </section>

                                <section id="data-security" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">How Do We Keep Your Information Safe?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: We aim to protect your personal information through a system of organizational and technical security measures.
                                        </p>
                                        <p className="mb-4">
                                                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                        </p>
                                </section>

                                <section id="privacy-rights" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">What Are Your Privacy Rights?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                                        </p>
                                        <p className="mb-4">
                                                In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.
                                        </p>
                                        <p className="mb-4">
                                                We will consider and act upon any request in accordance with applicable data protection laws.
                                        </p>
                                        <p className="mb-4">
                                                <strong>Withdrawing Your Consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below or updating your preferences.
                                        </p>
                                        <p className="mb-4">
                                                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                                        </p>
                                        <p className="mb-4">
                                                <strong>Account Information:</strong> If you would at any time like to review or change the information in your account or terminate your account, you can:
                                        </p>
                                        <ul className="list-disc list-inside pl-4 mb-4">
                                                <li>Log in to your account settings and update your user account.</li>
                                                <li>Contact us using the contact information provided.</li>
                                        </ul>
                                        <p className="mb-4">
                                                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                                        </p>
                                        <p className="mb-4">
                                                If you have questions or comments about your privacy rights, you may email us at <a href="mailto:info@theschooloflifeart.com" className="text-blue-500 hover:underline">info@theschooloflifeart.com</a>.
                                        </p>
                                </section>

                                <section id="do-not-track" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Controls for Do-Not-Track Features</h2>
                                        <p className="text-lg mb-4">
                                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                                        </p>
                                        <p className="mb-4">
                                                California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                                        </p>
                                </section>

                                <section id="us-residents-rights" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-2">Do United States Residents Have Specific Privacy Rights?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: If you are a resident of California, Virginia, Connecticut, Colorado or Utah, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
                                        </p>
                                </section>

                                <section id="personal-info-categories" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Categories of Personal Information We Collect</h2>
                                        <p className="text-lg mb-4">
                                                We have collected the following categories of personal information in the past twelve (12) months:
                                        </p>
                                        <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-100">
                                                                <tr>
                                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collected</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">A. Identifiers</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">B. Personal information as defined in the California Customer Records statute</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Name, contact information, education, employment, employment history, and financial information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">C. Protected classification characteristics under state or federal law</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">D. Commercial information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Transaction information, purchase history, financial details, and payment information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">E. Biometric information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fingerprints and voiceprints</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">F. Internet or other similar network activity</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">G. Geolocation data</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Device location</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">H. Audio, electronic, sensory, or similar information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Images and audio, video or call recordings created in connection with our business activities</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">I. Professional or employment-related information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">J. Education Information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Student records and directory information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">K. Inferences drawn from collected personal information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L. Sensitive personal Information</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NO</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </section>

                                <section id="additional-info" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">We May Collect Additional Personal Information</h2>
                                        <p className="text-lg mb-4">
                                                We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                                        </p>
                                        <ul className="list-disc list-inside mb-4">
                                                <li>Receiving help through our customer support channels;</li>
                                                <li>Participation in customer surveys or contests; and</li>
                                                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                                        </ul>
                                </section>

                                <section id="sources-of-info" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Sources of Personal Information</h2>
                                        <p className="text-lg mb-4">
                                                Learn more about the sources of personal information we collect in the section, <a href="#info-collection" className="text-blue-500 underline">"WHAT INFORMATION DO WE COLLECT?"</a>.
                                        </p>
                                </section>

                                <section id="use-share-info" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">How We Use and Share Personal Information</h2>
                                        <p className="text-lg mb-4">
                                                Learn about how we use your personal information in the section, <a href="#info-processing" className="text-blue-500 underline">"HOW DO WE PROCESS YOUR INFORMATION?"</a>.
                                        </p>
                                        <p className="text-lg mb-4">
                                                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, <a href="#info-sharing" className="text-blue-500 underline">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a>.
                                        </p>
                                        <p className="text-lg mb-4">
                                                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                                        </p>
                                        <p className="text-lg mb-4">
                                                We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
                                        </p>
                                </section>

                                <section id="rights" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                                        <p className="text-lg mb-4">
                                                You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                                        </p>
                                        <ul className="list-disc list-inside mb-4">
                                                <li>Right to know whether or not we are processing your personal data</li>
                                                <li>Right to access your personal data</li>
                                                <li>Right to correct inaccuracies in your personal data</li>
                                                <li>Right to request the deletion of your personal data</li>
                                                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                                                <li>Right to non-discrimination for exercising your rights</li>
                                                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                                        </ul>
                                        <p className="text-lg mb-4">
                                                Depending upon the state where you live, you may also have the following rights:
                                        </p>
                                        <ul className="list-disc list-inside mb-4">
                                                <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's privacy law)</li>
                                                <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</li>
                                        </ul>
                                </section>

                                <section id="exercise-rights" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">How to Exercise Your Rights</h2>
                                        <p className="text-lg mb-4">
                                                To exercise these rights, you can contact us by visiting <a href="https://www.theschooloflifeart.com/policy" className="text-blue-500 underline">this link</a>, by emailing us at <a href="mailto:info@theschooloflifeart.com" className="text-blue-500 underline">info@theschooloflifeart.com</a>, or by referring to the contact details at the bottom of this document.
                                        </p>
                                        <p className="text-lg mb-4">
                                                Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                                        </p>
                                </section>

                                <section id="request-verification" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Request Verification</h2>
                                        <p className="text-lg mb-4">
                                                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                                        </p>
                                        <p className="text-lg mb-4">
                                                If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                                        </p>
                                </section>

                                <section id="appeals" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Appeals</h2>
                                        <p className="text-lg mb-4">
                                                Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:info@theschooloflifeart.com" className="text-blue-500 underline">info@theschooloflifeart.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                                        </p>
                                </section>

                                <section id="shine-the-light" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">California "Shine The Light" Law</h2>
                                        <p className="text-lg mb-4">
                                                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a href="#contact" className="text-blue-500 underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>.
                                        </p>
                                </section>

                                <section id="regional-rights" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Do Other Regions Have Specific Privacy Rights?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: You may have additional rights based on the country you reside in.
                                        </p>

                                        <h3 className="text-xl font-semibold mb-2">Australia</h3>
                                        <p className="text-lg mb-4">
                                                We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 (Privacy Act). This Privacy Notice satisfies the notice requirements defined in the Privacy Act, including details on what personal information we collect, the sources of that information, the purposes for which we use it, and other recipients of your personal information.
                                        </p>
                                        <p className="text-lg mb-4">
                                                If you do not wish to provide the personal information necessary to fulfill the applicable purpose, it may affect our ability to provide our services, such as offering you the products or services you want, responding to your requests, managing your account, and protecting your account.
                                        </p>
                                        <p className="text-lg mb-4">
                                                You have the right to request access to or correction of your personal information at any time. You can make such a request by contacting us using the contact details provided in the section <a href="#update-delete-data" className="text-blue-500 underline">"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"</a>.
                                        </p>
                                        <p className="text-lg mb-4">
                                                If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner.
                                        </p>

                                        <h3 className="text-xl font-semibold mb-2">Republic of South Africa</h3>
                                        <p className="text-lg mb-4">
                                                At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us using the contact details provided in the section <a href="#update-delete-data" className="text-blue-500 underline">"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"</a>.
                                        </p>
                                        <p className="text-lg mb-4">
                                                If you are unsatisfied with the manner in which we address any complaint regarding our processing of personal information, you can contact the office of the regulator, the details of which are:
                                        </p>
                                        <p className="text-lg mb-4">
                                                The Information Regulator (South Africa)<br />
                                                General enquiries: <a href="mailto:enquiries@inforegulator.org.za" className="text-blue-500 underline">enquiries@inforegulator.org.za</a><br />
                                                Complaints (complete POPIA/PAIA form 5): <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-blue-500 underline">PAIAComplaints@inforegulator.org.za</a> & <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-blue-500 underline">POPIAComplaints@inforegulator.org.za</a>
                                        </p>
                                </section>

                                <section id="updates" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">Do We Make Updates to This Notice?</h2>
                                        <p className="text-lg mb-4">
                                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                                        </p>
                                        <p className="text-lg mb-4">
                                                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                                        </p>
                                </section>

                                <section id="contact" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">How Can You Contact Us About This Notice?</h2>
                                        <p className="text-lg mb-4">
                                                If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at <a href="mailto:raychelkarugu.rk@gmail.com" className="text-blue-500 underline">raychelkarugu.rk@gmail.com</a>, by phone at <a href="tel:0728375563" className="text-blue-500 underline">0728375563</a>, or contact us by post at:
                                        </p>
                                        <address className="text-lg mb-4">
                                                The School of Life Art<br />
                                                Data Protection Officer<br />
                                                Westlands 16947<br />
                                                Nairobi, Nairobi<br />
                                                Kenya
                                        </address>
                                </section>

                                <section id="update-delete-data" className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4">How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                                        <p className="text-lg mb-4">
                                                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="https://www.theschooloflifeart.com/policy" className="text-blue-500 underline">https://www.theschooloflifeart.com/policy</a>.
                                        </p>
                                </section>
                        </div>


                        <Footer />
                </main>
        )
}

export default policy