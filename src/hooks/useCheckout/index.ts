
import { useShoppingCart } from "use-shopping-cart";

export function useCheckout() {
  const { cartDetails, redirectToCheckout } = useShoppingCart();

  async function redirectCheckout() {
    async function checkout() {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(cartDetails),
        });

        const data = await response.json();

        await redirectToCheckout(data.id);
      } catch (e) {
        console.error(e);
      }
    }

    checkout();
  }

  return { redirectCheckout };
}
