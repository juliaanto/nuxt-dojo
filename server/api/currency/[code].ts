interface ApiResponse {
  data: {
    [currencyCode: string]: {
      code: string;
      value: number;
    };
  };
}

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code');
  const { currencyKey } = useRuntimeConfig();

  const uri: string = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}&base_currency=EUR`;

  const { data } = await $fetch(uri) as ApiResponse;

  return data;
})