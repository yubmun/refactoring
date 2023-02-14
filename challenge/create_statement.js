export function createStatement(invoice, plays){
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map((p) => enrichPerformance(p));
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances)

  function enrichPerformance(performance){
    const result = {...performance};
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.credits = creditsFor(result);
    return result;
  }
  function playFor(perf) {
    return plays[perf.playID];
  }
  function amountFor(perf) {
    let thisAmount = 0;
    switch (performance.play.type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy": // 희극
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`);
    }
    return thisAmount;
  }

  function creditsFor(perf) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
    if ("comedy" === performance.play) {
      result += Math.floor(perf.audience / 5);
    }
    return result;
  }

  function totalAmount(performances) {
    return performances.reduce((sum, p) => (sum += amountFor(p)), 0);
  }

  function totalCredits(performances) {
    return performances.reduce((sum, p) => (sum += creditsFor(p)), 0);
  }

}