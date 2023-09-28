const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const costumerName = fullOrder.name;
  const phoneNumber = fullOrder.phoneNumber;
  const street = fullOrder.address.street;
  const number = fullOrder.address.number;
  const apartment = fullOrder.address.apartment;

  return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número ${number}, AP: ${apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  fullOrder.name = "Luiz Silva";
  const drink = fullOrder.order.drinks.coke.type;
  const pizza = Object.keys(fullOrder.order.pizza).join(", ");
  fullOrder.payment.total = 50.0;
  const total = fullOrder.payment.total;
  return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizza} e ${drink} é R$ ${total}.`;
};

console.log(orderModifier(order));
