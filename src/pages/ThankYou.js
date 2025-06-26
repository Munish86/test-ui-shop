import '../styles/ThankYou.css';


export default function ThankYou() {

  return (
    <div className="p-10 thankyou-design text-center">
      <h1 className="text-3xl thankyou-design font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="thankyou-design">Your order has been placed successfully.</p>
      <p className="mt-2 thankyou-design">We'll notify you once it's shipped.</p>
    </div>
  );
}
