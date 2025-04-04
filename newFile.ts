export default defineNuxtConfig({
  modules: ['@nuxtjs/google-tag-manager'],
  gtm: {
    id: 'GTM-WVDJ4WNK', // Твой GTM ID
    enabled: true, // Включает GTM
    debug: true, // Показывает данные в консоли (можно отключить)
    autoInit: true, // Автоматически инициализирует GTM
  }
});
