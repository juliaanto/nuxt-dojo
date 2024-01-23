export default defineEventHandler(async (event: any) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri: string = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}&base_currency=EUR`;

  const { data }: any = await $fetch(uri);

  return data;
})