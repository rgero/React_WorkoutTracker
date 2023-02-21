export default (targetDate) => {
    let formattedDate = targetDate;
    const offset = formattedDate.getTimezoneOffset()
    formattedDate = new Date(formattedDate.getTime() - (offset*60*1000))
    return formattedDate.toISOString().split('T')[0]
}