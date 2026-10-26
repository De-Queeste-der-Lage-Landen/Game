export default `public double generateCijfer(int score, double N, int schaallengte) {
    BigDecimal cijfer;
    if (N < 0.999) {
      cijfer = min(
        this.Hoofdrelatie(score, BigDecimal.valueOf(nterm), schaallengte),
        this.Grensrelatie2(score, schaallengte),
        this.Grensrelatie3(score, schaallengte),
      )
    } else if (N > 1.0001) {
      cijfer = max(
        this.Hoofdrelatie(score, BigDecimal.valueOf(nterm), schaallengte),
        this.Grensrelatie1(score, schaallengte),
        this.Grensrelatie4(score, schaallengte),
      )
    } else {
      cijfer = this.generateCijferVoorHoofdrelatie(score, BigDecimal.valueOf(nterm), schaallengte);
    }
    cijfer = cijfer.setScale(1, roundingMode.HALF_UP);
    return cijfer.doubleValue()
  }
`;
