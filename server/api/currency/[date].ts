export default defineEventHandler(async (event: any) => {
  const { date } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri: string = `https://api.currencyapi.com/v3/historical?apikey=${currencyKey}&currencies=EUR&date=${date}`;

  const { data }: any = await $fetch(uri);

  return data;
})