class Lotto {

  /** @type {Array<number>} Lotto 번호 배열 */
  #numbers = null;

  /** @type {number} 당첨번호 일치 숫자 개수 */
  #match = null;

  /** @type {boolean} 보너스 번호 일치 여부 */
  #bonusMatch = null;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  setMatch(match) {
    this.#match = match;
  }

  getMatch() {
    return this.#match;
  }

  setBonusMatch(bonusMatch) {
    this.#bonusMatch = bonusMatch;
  }

  getBonusMatch() {
    return this.#bonusMatch;
  }
}

export default Lotto;
