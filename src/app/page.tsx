import Image from 'next/image';
import FacebookIcon from '@/components/icons/FacebookIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import CheckIcon from '@/components/icons/CheckIcon';
import CrossIcon from '@/components/icons/CrossIcon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center py-20 px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          SwiftBox: Beyond Fast. Beyond Expectation.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          The future of payments, delivered instantly. Send funds, gifts, and more—with guaranteed speed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Download on App Store
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-gray-800 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-900"
          >
            Get it on Google Play
          </a>
        </div>
        <div className="mt-12 mx-auto max-w-3xl">
          <Image
            src="https://picsum.photos/seed/swiftbox-app/1200/675"
            alt="SwiftBox App Mockup"
            width={1200}
            height={675}
            className="rounded-lg"
          />
        </div>
      </div>
      <section className="py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Tired of Slow Transfers?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Say goodbye to waiting. SwiftBox is here to revolutionize your financial transactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Old Way</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CrossIcon />
                  <span>Waiting 24 hours for bank settlements.</span>
                </li>
                <li className="flex items-start">
                  <CrossIcon />
                  <span>Hidden fees and complex processes.</span>
                </li>
                <li className="flex items-start">
                  <CrossIcon />
                  <span>Transfers limited to business hours.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The SwiftBox Way</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Instant, 24/7 transfers, settled in seconds.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Transparent, low-cost transactions.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Send and receive money anytime, anywhere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 w-full bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Experience Instant Settlement.
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Leveraging next-gen routing and optimized architecture to cut latency and deliver funds in under 1 second.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/seed/swiftbox-speed/600/400"
              alt="Speed Graphic"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:order-last">
            <Image
              src="https://picsum.photos/seed/swiftbox-giftbox/600/400"
              alt="GiftBox Animation"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="text-left order-first">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              The Power of the Anonymous GiftBox.
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Send funds, surprises, and support to anyone in your network, completely discreetly. Make an impact without making a fuss.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 w-full bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Your Security is Our Priority.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We use the latest technology to keep your account safe and secure.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Biometric Login</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Secure your account with your fingerprint or face.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bank-Grade Encryption</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Your data is protected with the same encryption used by banks.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">24/7 Fraud Monitoring</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We monitor your account for suspicious activity around the clock.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8">
            <Image src="https://picsum.photos/seed/partner1/120/60" alt="Security Partner 1" width={120} height={60} />
            <Image src="https://picsum.photos/seed/partner2/120/60" alt="Security Partner 2" width={120} height={60} />
            <Image src="https://picsum.photos/seed/partner3/120/60" alt="Security Partner 3" width={120} height={60} />
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 dark:bg-gray-900 text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold">SwiftBox</h3>
              <p className="mt-2 text-sm text-gray-400">
                The future of payments, delivered instantly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact</h3>
              <p className="mt-2 text-sm text-gray-400">
                Email: support@swiftbox.com
              </p>
              <p className="text-sm text-gray-400">
                Address: 123 Swift Street, San Francisco, CA 94102
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 SwiftBox. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
