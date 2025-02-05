export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500">&copy; 2023 PepeFrog Coin. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
            Telegram
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
            Discord
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
            Medium
          </a>
        </div>
      </div>
    </footer>
  )
}

