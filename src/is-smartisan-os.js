const smartisanOSRegex = /(OD105|SM919|SM801|YQ601|SM701)/

/**
 * test is a userAgent belongs to Smartisan OS
 * 
 * @param {string} userAgent? userAgent string
 * @returns {boolean} result
 */
export default function isSmartisanOS(userAgent) {
  if (!userAgent) {
    try {
      return smartisanOSRegex.test(navigator.userAgent)
    } catch (e) {
      return false
    }
  }
  return smartisanOSRegex.test(`${userAgent}`)
}
