import {React, useRef, useEffect} from 'react';
import { gsap } from "gsap";

import part from '../img/part-three.svg';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Three = () => {

    const three = useRef();
    const leafs = useRef();

    useEffect(() => {

        gsap.fromTo(three.current, {
            alpha: 0,
            clipPath: "inset(100% 100% 0% 0%)"
          }, {
            duration: 1.5,
            alpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            scrollTrigger: {
              trigger: '#works',
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none none",
            }
          });

          gsap.fromTo(leafs.current, {
            alpha: 0,
          }, {
            delay: 1.5,
            duration: 1,
            alpha: 1,
            scrollTrigger: {
              trigger: '#works',
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none none",
            }
          });
    });

    return(
        <div id="works" className={'three-wrapper'}>
            <svg ref={three} className={'three-img'} width="1650" height="956" viewBox="0 0 1650 956" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 893.199V836.941C12.3654 832.187 35.7162 822.52 38.1959 821.886L87.7904 809.209L137.385 802.87L161.149 790.192L200.411 780.684L237.607 754.536L245.873 711.749V697.486L248.973 684.808L274.803 661.038L298.567 633.305L320.265 617.458L326.464 576.255L323.364 539.807L309.932 497.019L288.235 454.232L263.438 415.406V395.598L276.869 371.827L300.633 346.471L321.298 311.608L334.73 252.973C333.008 236.862 329.564 204.322 329.564 203.054V161.059L340.929 123.819V104.01L345.062 120.649L360.56 109.556L348.161 128.573L345.062 141.25L340.929 161.059V194.338L345.062 231.579V245.842C345.406 252.181 345.888 265.017 345.062 265.651C344.235 266.285 341.962 279.649 340.929 286.252L334.73 310.023L325.431 330.624L347.128 306.853L377.092 281.498L394.656 263.274L417.387 227.617L431.852 199.093L434.952 165.814L439.085 196.716L434.952 212.563L421.52 241.88L390.523 286.252L345.062 333.794C337.14 342.245 321.298 359.466 321.298 360.734C321.298 362.002 303.389 380.807 294.434 390.051L288.235 399.559V408.275L298.567 423.33L314.065 447.893L326.464 465.325L332.663 480.38L335.763 485.134L348.161 472.456L372.959 455.817L393.623 444.724L425.653 424.915L445.284 408.275L485.58 390.051L491.779 385.297L494.879 372.619L496.945 381.335L522.775 359.149L539.307 335.378L553.772 311.608C554.805 310.551 556.872 307.804 556.872 305.269V292.591L559.971 298.93L580.636 283.875L563.071 305.269L553.772 321.116L544.473 344.094L522.775 375.789L496.945 394.805L499.011 397.182L537.241 394.805L547.573 385.297L544.473 397.182H559.971L576.503 394.805L596.134 387.674L580.636 397.182L567.204 400.352L542.407 402.729H499.011L481.447 405.898L460.782 416.199L429.786 435.215L401.889 459.779L372.959 488.303L359.527 505.735L352.294 526.337V560.408L355.394 576.255L359.527 603.988L357.46 617.458L351.261 633.305L332.663 659.453L305.8 689.563L290.301 711.749C288.924 717.559 286.168 729.814 286.168 732.35C286.168 735.519 282.035 759.29 279.969 763.252C278.316 766.421 272.392 776.194 269.637 780.684L255.172 795.739H286.168L302.7 799.7L340.929 793.362L390.523 773.553L403.955 763.252C407.055 758.234 413.461 747.88 414.287 746.612C415.114 745.345 432.541 722.842 441.151 711.749L480.413 664.207L527.942 619.043L565.137 594.48L596.134 575.463L611.632 569.916C617.832 564.37 630.643 552.96 632.297 551.692C633.95 550.424 635.741 547.995 636.43 546.938L638.496 536.637L663.293 509.697C672.592 503.358 691.397 490.205 692.223 488.303C693.05 486.402 699.456 475.89 702.555 470.872L710.821 436.8L715.987 405.898L719.087 360.734L715.987 321.116L728.386 294.968L737.685 266.443L744.917 237.918C747.673 228.41 753.183 208.918 753.183 207.016V188.792L744.917 164.229L739.751 135.704L735.619 102.425V96.8783L721.153 83.4082L717.021 76.277L735.619 89.7471V62.8069L742.851 47.7521V65.184V93.7089C742.851 96.2444 746.984 116.951 749.05 126.988L756.283 154.721L767.648 180.868L779.014 171.36L795.545 149.966L800.711 135.704L806.911 115.103V104.802L811.043 111.141L822.409 91.3318L846.173 59.6375L849.273 33.4896L852.372 56.468L866.837 47.7521L852.372 62.8069L846.173 71.5228L828.608 100.048C825.164 106.123 818.069 118.589 817.243 119.857C816.21 121.441 806.911 142.043 806.911 143.627C806.911 144.895 802.778 155.249 800.711 160.267L795.545 175.322L783.147 207.016L767.648 237.918L751.117 293.383L744.917 330.624L740.785 363.111V389.259L782.113 365.488L841.007 338.548L864.771 322.701L880.269 301.307L886.469 275.159L894.734 253.765L898.867 226.033V191.169L894.734 171.36L886.469 154.721L882.336 143.627L877.169 133.327L886.469 143.627L894.734 157.098L904.033 173.737L908.166 193.546V207.016L919.531 198.3C917.809 202.79 914.159 211.77 913.332 211.77C912.506 211.77 909.544 217.581 908.166 220.486L906.1 237.918V261.689L904.033 288.629L894.734 311.608L883.369 330.624L913.332 324.285L942.262 313.192L970.159 296.553L973.259 283.083L976.358 293.383L1007.36 271.197L1032.15 250.596L1038.35 239.503L1035.25 253.765L1028.02 261.689C1017.69 269.084 996.816 284.35 995.99 286.252C995.163 288.154 976.359 301.307 967.06 307.646L924.698 330.624L888.535 344.094C874.759 349.641 846.586 360.734 844.107 360.734C841.627 360.734 818.276 374.468 806.911 381.335L767.648 407.483L748.017 440.762L740.785 470.872L736.652 498.604C727.353 509.697 708.135 532.359 705.655 534.26C703.175 536.162 686.713 550.9 678.792 558.031H719.087L756.283 566.747L804.844 569.916C825.853 568.86 868.284 566.747 869.937 566.747C871.59 566.747 896.801 561.993 909.199 559.616L937.096 542.976C952.25 537.43 983.384 526.178 986.691 525.544C989.997 524.91 1044.55 508.905 1071.41 500.981L1114.81 481.965C1125.83 471.928 1148.49 451.538 1150.97 450.27C1153.45 449.002 1164.4 438.121 1169.57 432.838L1211.93 406.691L1220.2 396.39L1226.4 382.92C1225.71 373.147 1224.74 352.969 1226.4 350.433C1228.05 347.898 1233.29 329.304 1235.7 320.323L1250.16 287.044L1258.43 260.897L1256.36 240.295V225.24L1243.96 214.94L1258.43 220.486L1261.53 197.508L1265.66 179.284V156.305L1258.43 149.174L1268.76 153.928L1280.12 134.912L1273.93 156.305L1270.83 169.775V186.415V206.224L1273.93 210.978L1286.32 207.809L1304.92 192.754L1309.05 174.529V183.245L1326.62 174.529L1313.19 192.754L1296.66 210.978L1283.22 220.486L1270.83 227.617V252.181C1270.83 252.973 1272.89 268.82 1270.83 271.197C1269.17 273.099 1266.69 281.498 1265.66 285.46L1256.36 310.815C1254.29 318.475 1250.16 334.269 1250.16 336.171C1250.16 338.072 1248.09 353.338 1247.06 360.734V378.166L1232.6 405.106L1207.8 424.122L1175.77 452.647L1214 436.008L1253.26 413.822L1256.36 400.352L1258.43 412.237L1294.59 384.504L1326.62 373.411L1354.52 360.734L1370.01 341.717V266.443L1387.58 235.541L1409.28 218.109L1440.27 200.677L1471.27 174.529L1504.33 144.42L1513.63 130.95L1519.83 106.387V74.6923L1516.73 39.0361L1507.43 27.1508L1500.2 19.2272H1478.5L1500.2 15.2654L1495.03 1.00293L1507.43 12.8883L1513.63 23.9813L1525 39.0361L1531.2 64.3916V84.9929L1533.26 93.7089L1550.83 84.9929L1535.33 107.179C1533.95 115.895 1530.58 133.644 1528.1 134.912C1525.62 136.179 1515.35 151.287 1510.53 158.682L1483.67 186.415L1447.51 214.94C1439.24 222.863 1422.5 239.027 1421.68 240.295C1420.85 241.563 1409.62 258.255 1404.11 266.443V300.514L1417.54 291.799L1440.27 266.443L1457.84 252.181L1483.67 243.465L1498.13 240.295L1510.53 225.24L1519.83 214.94C1525.34 212.034 1536.78 206.224 1538.43 206.224C1540.08 206.224 1557.03 200.413 1565.29 197.508L1596.29 192.754L1603.52 174.529V188.792L1650.02 168.191L1601.46 195.923L1579.76 200.677L1555.99 206.224C1547.38 209.921 1529.75 217.475 1528.1 218.109C1526.44 218.743 1517.77 227.882 1513.63 232.372L1510.53 240.295L1522.93 243.465L1545.66 240.295L1564.26 237.126H1583.89L1615.92 222.071L1603.52 235.541L1650.02 222.071L1612.82 237.126L1596.29 243.465L1577.69 242.672L1555.99 243.465L1534.3 250.596L1513.63 254.558H1491.93L1471.27 260.897L1447.51 278.328L1423.74 301.307L1415.48 325.87L1408.24 348.056L1390.68 368.657C1379.66 374.732 1357 387.357 1354.52 389.259C1351.42 391.636 1337.99 396.39 1334.89 396.39C1332.41 396.39 1310.43 408.011 1299.76 413.822L1270.83 436.008L1258.43 452.647L1202.63 477.21L1230.53 476.418L1258.43 470.079H1354.52L1376.21 463.74H1394.81L1416.51 454.232L1445.44 437.593L1466.1 422.538L1476.44 412.237L1491.93 406.691L1518.8 403.521L1540.5 394.013L1552.89 378.166L1564.26 368.657L1581.82 360.734V350.433L1586.99 358.357L1617.99 350.433L1592.16 363.111L1581.82 368.657L1564.26 378.166L1560.13 389.259L1544.63 409.86L1521.9 416.199L1502.27 420.161L1489.87 420.953L1476.44 430.461L1473.34 439.177L1498.13 441.554L1513.63 445.516L1537.4 439.177L1521.9 450.27L1534.3 452.647L1555.99 454.232H1570.46L1590.09 448.686L1596.29 445.516L1583.89 457.401L1552.89 460.571H1527.06L1513.63 457.401L1491.93 450.27H1476.44L1460.94 454.232L1440.27 463.74L1417.54 474.041L1397.91 481.965L1361.75 485.926H1309.05L1277.03 492.265L1251.19 501.774C1238.45 504.943 1211.93 511.757 1207.8 513.659C1203.67 515.561 1175.08 519.734 1161.3 521.583L1114.81 525.544C1107.92 528.978 1093.53 536.162 1091.05 537.43C1087.95 539.014 1062.12 546.938 1057.98 548.523C1053.85 550.107 1025.95 559.616 1022.85 559.616C1019.75 559.616 971.192 576.255 968.093 577.048C965.613 577.681 946.395 585.235 937.096 588.933C930.208 591.838 915.399 597.966 911.266 599.234C906.1 600.818 880.269 603.195 877.169 603.195H834.807C831.708 603.195 799.678 599.234 796.578 599.234C794.099 599.234 763.86 598.177 749.05 597.649C739.063 596.328 718.467 593.687 715.987 593.687C712.888 593.687 689.124 596.064 687.057 596.064C685.404 596.064 669.148 602.403 661.227 605.573L636.43 619.043L615.765 631.72C607.155 638.323 589.315 652.322 586.835 655.491C584.355 658.661 572.026 670.546 566.171 676.092L542.407 704.617C538.963 710.692 531.248 723.317 527.942 725.219C524.635 727.12 510.721 740.273 504.178 746.612L497.978 755.328L527.942 750.574C541.373 747.405 568.65 741.066 570.304 741.066H593.034C599.922 739.745 614.112 736.946 615.765 736.312C617.418 735.678 633.674 736.048 641.596 736.312L656.061 730.765C661.571 728.388 673.832 723.951 678.792 725.219C684.991 726.803 707.722 727.596 712.888 729.18C717.021 730.448 732.519 734.463 739.751 736.312L761.449 744.235L773.848 757.705L793.479 763.252L829.641 770.383C841.351 769.063 865.804 766.421 869.937 766.421C875.103 766.421 903 760.875 906.1 759.29C908.579 758.022 929.864 747.669 940.196 742.651C950.872 737.368 972.432 726.486 973.259 725.219C974.085 723.951 991.512 715.71 1000.12 711.749L1031.12 695.109C1038.01 691.411 1052.4 683.382 1054.88 680.847C1057.36 678.311 1069 669.754 1074.51 665.792L1097.24 646.775L1106.54 632.513L1114.81 611.911V627.759L1156.14 607.95L1122.04 632.513L1103.44 653.114L1092.08 664.207L1111.71 659.453L1074.51 678.47L1057.98 695.109L1037.32 716.503H1078.65L1114.81 703.825L1156.14 692.732L1180.94 680.847L1190.23 664.207V678.47L1214 657.076L1234.66 634.097L1246.03 623.004L1251.19 604.78L1254.29 618.25L1281.16 607.95L1285.29 595.272L1288.39 604.78H1322.49L1288.39 611.911L1264.63 623.004L1243.96 638.852L1224.33 661.038L1208.83 678.47L1197.47 692.732C1187.14 698.279 1165.44 709.847 1161.3 711.749C1156.14 714.126 1136.51 720.465 1132.37 722.842C1129.07 724.743 1105.51 729.973 1094.15 732.35C1083.81 732.614 1062.32 733.301 1059.02 733.935C1055.71 734.569 1032.15 734.199 1020.79 733.935L985.657 754.536C979.458 760.083 966.646 771.651 964.993 773.553C963.34 775.454 955.35 783.325 951.561 787.023L969.126 797.323L990.824 802.87C993.303 803.504 1014.59 806.832 1024.92 808.416L1054.88 812.378H1074.51L1122.04 808.416H1129.27L1140.64 792.569V805.247H1190.23L1210.9 790.192L1202.63 805.247H1219.16L1246.03 810.793L1204.7 810.001L1190.23 810.793L1169.57 812.378L1132.37 816.34L1103.44 822.679L1067.28 825.848H1031.12L998.056 822.679L954.661 816.34L926.764 805.247L904.033 800.493H847.206C835.496 798.644 811.663 794.946 810.01 794.946C808.357 794.946 779.014 789.664 764.549 787.023L712.888 773.553L676.725 766.421H641.596L603.367 773.553L550.672 779.099L512.443 787.023L485.58 795.739H455.616L423.586 821.094C412.221 825.32 388.87 833.93 386.391 834.564C383.911 835.198 341.962 843.28 321.298 847.242L269.637 850.411L195.245 853.581H132.219L95.0229 856.75C83.6575 860.712 60.5134 868.794 58.8602 869.428C56.7938 870.22 21.6644 888.445 19.5979 889.237C17.9448 889.871 6.5105 892.142 1 893.199Z" fill="white"/>
            <path d="M38.1959 821.886C35.7162 822.52 12.3654 832.187 1 836.941V893.199C6.5105 892.142 17.9448 889.871 19.5979 889.237C21.6644 888.445 56.7938 870.22 58.8602 869.428C60.5134 868.794 83.6575 860.712 95.0229 856.75L132.219 853.581H195.245L269.637 850.411L321.298 847.242C341.962 843.28 383.911 835.198 386.391 834.564C388.87 833.93 412.221 825.32 423.586 821.094L455.616 795.739H485.58L512.443 787.023L550.672 779.099L603.367 773.553L641.596 766.421H676.725L712.888 773.553L764.549 787.023C779.014 789.664 808.357 794.946 810.01 794.946C811.663 794.946 835.496 798.644 847.206 800.493H904.033L926.764 805.247L954.661 816.34L998.056 822.679L1031.12 825.848H1067.28L1103.44 822.679L1132.37 816.34L1169.57 812.378L1190.23 810.793L1204.7 810.001L1246.03 810.793L1219.16 805.247H1202.63L1210.9 790.192L1190.23 805.247H1140.64V792.569L1129.27 808.416H1122.04L1074.51 812.378H1054.88L1024.92 808.416C1014.59 806.832 993.303 803.504 990.824 802.87M38.1959 821.886C40.6756 821.253 72.2921 813.17 87.7904 809.209M38.1959 821.886L87.7904 809.209M87.7904 809.209L137.385 802.87L161.149 790.192L200.411 780.684L237.607 754.536L245.873 711.749V697.486L248.973 684.808L274.803 661.038L298.567 633.305L320.265 617.458L326.464 576.255L323.364 539.807L309.932 497.019L288.235 454.232L263.438 415.406V395.598L276.869 371.827L300.633 346.471L321.298 311.608L334.73 252.973C333.008 236.862 329.564 204.322 329.564 203.054M329.564 203.054C329.564 201.787 329.564 174.529 329.564 161.059M329.564 203.054V161.059M329.564 161.059L340.929 123.819V104.01L345.062 120.649L360.56 109.556L348.161 128.573L345.062 141.25L340.929 161.059V194.338L345.062 231.579V245.842C345.406 252.181 345.888 265.017 345.062 265.651C344.235 266.285 341.962 279.649 340.929 286.252L334.73 310.023L325.431 330.624L347.128 306.853L377.092 281.498L394.656 263.274L417.387 227.617L431.852 199.093L434.952 165.814L439.085 196.716L434.952 212.563L421.52 241.88L390.523 286.252L345.062 333.794C337.14 342.245 321.298 359.466 321.298 360.734C321.298 362.002 303.389 380.807 294.434 390.051L288.235 399.559V408.275L298.567 423.33L314.065 447.893L326.464 465.325L332.663 480.38L335.763 485.134L348.161 472.456L372.959 455.817L393.623 444.724L425.653 424.915L445.284 408.275L485.58 390.051L491.779 385.297L494.879 372.619L496.945 381.335L522.775 359.149L539.307 335.378L553.772 311.608C554.805 310.551 556.872 307.804 556.872 305.269M556.872 305.269C556.872 302.733 556.872 295.76 556.872 292.591M556.872 305.269V292.591M556.872 292.591L559.971 298.93L580.636 283.875L563.071 305.269L553.772 321.116L544.473 344.094L522.775 375.789L496.945 394.805L499.011 397.182L537.241 394.805L547.573 385.297L544.473 397.182H559.971L576.503 394.805L596.134 387.674L580.636 397.182L567.204 400.352L542.407 402.729H499.011L481.447 405.898L460.782 416.199L429.786 435.215L401.889 459.779L372.959 488.303L359.527 505.735L352.294 526.337V560.408L355.394 576.255L359.527 603.988L357.46 617.458L351.261 633.305L332.663 659.453L305.8 689.563L290.301 711.749C288.924 717.559 286.168 729.814 286.168 732.35C286.168 735.519 282.035 759.29 279.969 763.252C278.316 766.421 272.392 776.194 269.637 780.684L255.172 795.739H286.168L302.7 799.7L340.929 793.362L390.523 773.553L403.955 763.252C407.055 758.234 413.461 747.88 414.287 746.612C415.114 745.345 432.541 722.842 441.151 711.749L480.413 664.207L527.942 619.043L565.137 594.48L596.134 575.463L611.632 569.916C617.832 564.37 630.643 552.96 632.297 551.692C633.95 550.424 635.741 547.995 636.43 546.938L638.496 536.637L663.293 509.697C672.592 503.358 691.397 490.205 692.223 488.303C693.05 486.402 699.456 475.89 702.555 470.872L710.821 436.8L715.987 405.898L719.087 360.734L715.987 321.116L728.386 294.968L737.685 266.443L744.917 237.918C747.673 228.41 753.183 208.918 753.183 207.016M753.183 207.016C753.183 205.115 753.183 194.074 753.183 188.792M753.183 207.016V188.792M753.183 188.792L744.917 164.229L739.751 135.704L735.619 102.425V96.8783L721.153 83.4082L717.021 76.277L735.619 89.7471V62.8069L742.851 47.7521V65.184M742.851 65.184C742.851 73.6358 742.851 91.1733 742.851 93.7089M742.851 65.184V93.7089M742.851 93.7089C742.851 96.2444 746.984 116.951 749.05 126.988L756.283 154.721L767.648 180.868L779.014 171.36L795.545 149.966L800.711 135.704L806.911 115.103V104.802L811.043 111.141L822.409 91.3318L846.173 59.6375L849.273 33.4896L852.372 56.468L866.837 47.7521L852.372 62.8069L846.173 71.5228L828.608 100.048C825.164 106.123 818.069 118.589 817.243 119.857C816.21 121.441 806.911 142.043 806.911 143.627C806.911 144.895 802.778 155.249 800.711 160.267L795.545 175.322L783.147 207.016L767.648 237.918L751.117 293.383L744.917 330.624L740.785 363.111V389.259L782.113 365.488L841.007 338.548L864.771 322.701L880.269 301.307L886.469 275.159L894.734 253.765L898.867 226.033V191.169L894.734 171.36L886.469 154.721L882.336 143.627L877.169 133.327L886.469 143.627L894.734 157.098L904.033 173.737L908.166 193.546V207.016L919.531 198.3C917.809 202.79 914.159 211.77 913.332 211.77C912.506 211.77 909.544 217.581 908.166 220.486L906.1 237.918V261.689L904.033 288.629L894.734 311.608L883.369 330.624L913.332 324.285L942.262 313.192L970.159 296.553L973.259 283.083L976.358 293.383L1007.36 271.197L1032.15 250.596L1038.35 239.503L1035.25 253.765L1028.02 261.689C1017.69 269.084 996.816 284.35 995.99 286.252C995.163 288.154 976.359 301.307 967.06 307.646L924.698 330.624L888.535 344.094C874.759 349.641 846.586 360.734 844.107 360.734C841.627 360.734 818.276 374.468 806.911 381.335L767.648 407.483L748.017 440.762L740.785 470.872L736.652 498.604C727.353 509.697 708.135 532.359 705.655 534.26C703.175 536.162 686.713 550.9 678.792 558.031H719.087L756.283 566.747L804.844 569.916C825.853 568.86 868.284 566.747 869.937 566.747C871.59 566.747 896.801 561.993 909.199 559.616L937.096 542.976C952.25 537.43 983.384 526.178 986.691 525.544C989.997 524.91 1044.55 508.905 1071.41 500.981L1114.81 481.965C1125.83 471.928 1148.49 451.538 1150.97 450.27C1153.45 449.002 1164.4 438.121 1169.57 432.838L1211.93 406.691L1220.2 396.39L1226.4 382.92C1225.71 373.147 1224.74 352.969 1226.4 350.433C1228.05 347.898 1233.29 329.304 1235.7 320.323L1250.16 287.044L1258.43 260.897L1256.36 240.295V225.24L1243.96 214.94L1258.43 220.486L1261.53 197.508L1265.66 179.284V156.305L1258.43 149.174L1268.76 153.928L1280.12 134.912L1273.93 156.305L1270.83 169.775M1270.83 169.775C1270.83 174.529 1270.83 184.513 1270.83 186.415M1270.83 169.775V186.415M1270.83 186.415C1270.83 188.317 1270.83 200.413 1270.83 206.224M1270.83 186.415V206.224M1270.83 206.224L1273.93 210.978L1286.32 207.809L1304.92 192.754L1309.05 174.529V183.245L1326.62 174.529L1313.19 192.754L1296.66 210.978L1283.22 220.486L1270.83 227.617M1270.83 227.617C1270.83 235.541 1270.83 251.547 1270.83 252.181M1270.83 227.617V252.181M1270.83 252.181C1270.83 252.973 1272.89 268.82 1270.83 271.197C1269.17 273.099 1266.69 281.498 1265.66 285.46L1256.36 310.815C1254.29 318.475 1250.16 334.269 1250.16 336.171C1250.16 338.072 1248.09 353.338 1247.06 360.734V378.166L1232.6 405.106L1207.8 424.122L1175.77 452.647L1214 436.008L1253.26 413.822L1256.36 400.352L1258.43 412.237L1294.59 384.504L1326.62 373.411L1354.52 360.734L1370.01 341.717V266.443L1387.58 235.541L1409.28 218.109L1440.27 200.677L1471.27 174.529L1504.33 144.42L1513.63 130.95L1519.83 106.387V74.6923L1516.73 39.0361L1507.43 27.1508L1500.2 19.2272H1478.5L1500.2 15.2654L1495.03 1.00293L1507.43 12.8883L1513.63 23.9813L1525 39.0361L1531.2 64.3916V84.9929L1533.26 93.7089L1550.83 84.9929L1535.33 107.179C1533.95 115.895 1530.58 133.644 1528.1 134.912C1525.62 136.179 1515.35 151.287 1510.53 158.682L1483.67 186.415L1447.51 214.94C1439.24 222.863 1422.5 239.027 1421.68 240.295C1420.85 241.563 1409.62 258.255 1404.11 266.443V300.514L1417.54 291.799L1440.27 266.443L1457.84 252.181L1483.67 243.465L1498.13 240.295L1510.53 225.24L1519.83 214.94C1525.34 212.034 1536.78 206.224 1538.43 206.224C1540.08 206.224 1557.03 200.413 1565.29 197.508L1596.29 192.754L1603.52 174.529V188.792L1650.02 168.191L1601.46 195.923L1579.76 200.677L1555.99 206.224C1547.38 209.921 1529.75 217.475 1528.1 218.109C1526.44 218.743 1517.77 227.882 1513.63 232.372L1510.53 240.295L1522.93 243.465L1545.66 240.295L1564.26 237.126H1583.89L1615.92 222.071L1603.52 235.541L1650.02 222.071L1612.82 237.126L1596.29 243.465L1577.69 242.672L1555.99 243.465L1534.3 250.596L1513.63 254.558H1491.93L1471.27 260.897L1447.51 278.328L1423.74 301.307L1415.48 325.87L1408.24 348.056L1390.68 368.657C1379.66 374.732 1357 387.357 1354.52 389.259C1351.42 391.636 1337.99 396.39 1334.89 396.39C1332.41 396.39 1310.43 408.011 1299.76 413.822L1270.83 436.008L1258.43 452.647L1202.63 477.21L1230.53 476.418L1258.43 470.079H1354.52L1376.21 463.74H1394.81L1416.51 454.232L1445.44 437.593L1466.1 422.538L1476.44 412.237L1491.93 406.691L1518.8 403.521L1540.5 394.013L1552.89 378.166L1564.26 368.657L1581.82 360.734V350.433L1586.99 358.357L1617.99 350.433L1592.16 363.111L1581.82 368.657L1564.26 378.166L1560.13 389.259L1544.63 409.86L1521.9 416.199L1502.27 420.161L1489.87 420.953L1476.44 430.461L1473.34 439.177L1498.13 441.554L1513.63 445.516L1537.4 439.177L1521.9 450.27L1534.3 452.647L1555.99 454.232H1570.46L1590.09 448.686L1596.29 445.516L1583.89 457.401L1552.89 460.571H1527.06L1513.63 457.401L1491.93 450.27H1476.44L1460.94 454.232L1440.27 463.74L1417.54 474.041L1397.91 481.965L1361.75 485.926H1309.05L1277.03 492.265L1251.19 501.774C1238.45 504.943 1211.93 511.757 1207.8 513.659C1203.67 515.561 1175.08 519.734 1161.3 521.583L1114.81 525.544C1107.92 528.978 1093.53 536.162 1091.05 537.43C1087.95 539.014 1062.12 546.938 1057.98 548.523C1053.85 550.107 1025.95 559.616 1022.85 559.616C1019.75 559.616 971.192 576.255 968.093 577.048C965.613 577.681 946.395 585.235 937.096 588.933C930.208 591.838 915.399 597.966 911.266 599.234C906.1 600.818 880.269 603.195 877.169 603.195M877.169 603.195C874.07 603.195 837.907 603.195 834.807 603.195M877.169 603.195H834.807M834.807 603.195C831.708 603.195 799.678 599.234 796.578 599.234C794.099 599.234 763.86 598.177 749.05 597.649C739.063 596.328 718.467 593.687 715.987 593.687C712.888 593.687 689.124 596.064 687.057 596.064C685.404 596.064 669.148 602.403 661.227 605.573L636.43 619.043L615.765 631.72C607.155 638.323 589.315 652.322 586.835 655.491C584.355 658.661 572.026 670.546 566.171 676.092L542.407 704.617C538.963 710.692 531.248 723.317 527.942 725.219C524.635 727.12 510.721 740.273 504.178 746.612L497.978 755.328L527.942 750.574C541.373 747.405 568.65 741.066 570.304 741.066M570.304 741.066C571.957 741.066 586.146 741.066 593.034 741.066M570.304 741.066H593.034M593.034 741.066C599.922 739.745 614.112 736.946 615.765 736.312C617.418 735.678 633.674 736.048 641.596 736.312L656.061 730.765C661.571 728.388 673.832 723.951 678.792 725.219C684.991 726.803 707.722 727.596 712.888 729.18C717.021 730.448 732.519 734.463 739.751 736.312L761.449 744.235L773.848 757.705L793.479 763.252L829.641 770.383C841.351 769.063 865.804 766.421 869.937 766.421C875.103 766.421 903 760.875 906.1 759.29C908.579 758.022 929.864 747.669 940.196 742.651C950.872 737.368 972.432 726.486 973.259 725.219C974.085 723.951 991.512 715.71 1000.12 711.749L1031.12 695.109C1038.01 691.411 1052.4 683.382 1054.88 680.847C1057.36 678.311 1069 669.754 1074.51 665.792L1097.24 646.775L1106.54 632.513L1114.81 611.911V627.759L1156.14 607.95L1122.04 632.513L1103.44 653.114L1092.08 664.207L1111.71 659.453L1074.51 678.47L1057.98 695.109L1037.32 716.503H1078.65L1114.81 703.825L1156.14 692.732L1180.94 680.847L1190.23 664.207V678.47L1214 657.076L1234.66 634.097L1246.03 623.004L1251.19 604.78L1254.29 618.25L1281.16 607.95L1285.29 595.272L1288.39 604.78H1322.49L1288.39 611.911L1264.63 623.004L1243.96 638.852L1224.33 661.038L1208.83 678.47L1197.47 692.732C1187.14 698.279 1165.44 709.847 1161.3 711.749C1156.14 714.126 1136.51 720.465 1132.37 722.842C1129.07 724.743 1105.51 729.973 1094.15 732.35C1083.81 732.614 1062.32 733.301 1059.02 733.935C1055.71 734.569 1032.15 734.199 1020.79 733.935L985.657 754.536C979.458 760.083 966.646 771.651 964.993 773.553C963.34 775.454 955.35 783.325 951.561 787.023L969.126 797.323M969.126 797.323C975.325 798.908 988.344 802.236 990.824 802.87M969.126 797.323L990.824 802.87" stroke="white"/>
            </svg>

            <div ref={leafs} className={"three-projects"}>
                <a href="https://alexmosiakin.github.io/LightEffect/" className={"three-part part-1"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/testThree/" className={"three-part part-2"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/music-player/" className={"three-part part-3"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/Portofolio-site/" className={"three-part part-4"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/Photon/" className={"three-part part-5"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/DynamicWebsite/" className={"three-part part-6"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/ColorPalette/" className={"three-part part-7"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/BeatMaker/" className={"three-part part-8"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://alexmosiakin.github.io/To-do-list/" className={"three-part part-9"}>
                    <img src={part} alt="" />
                </a>

                <a href="https://croc-voting-app.herokuapp.com/main/turnout" className={"three-part part-10"}>
                    <img src={part} alt="" />
                </a>

                <div className={"three-title"}>
                    Explore front with me
                </div>
            </div>
        </div>
    )
}

export default Three;