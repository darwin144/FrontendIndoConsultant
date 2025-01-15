import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInStyle = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });






  const svgIcons = [
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 65 65"
        fill="none"
      >
        <path
          d="M13.7157 17.3311L23.7597 23.3585C24.1746 23.6076 24.7502 23.4669 25.0012 23.0474L32.6385 10.2855L37.8125 18.9293L34.6896 20.8034C33.9558 21.2437 34.2215 22.4048 35.0736 22.4814L47.7164 23.6235C47.9073 23.6408 48.0986 23.597 48.263 23.4984C48.4273 23.3998 48.5561 23.2515 48.6308 23.0749L53.5869 11.3719C53.9207 10.5834 53.0231 9.80132 52.2889 10.242L49.4237 11.9611L45.4743 5.06153C44.5603 3.4644 42.8545 2.47534 41.0229 2.47534H24.4174C22.6155 2.47534 20.9251 3.43659 20.0032 4.98861L17.7426 8.79072C17.149 9.79002 18.703 10.7178 19.2977 9.71691L21.558 5.91403C22.1553 4.90941 23.2494 4.28619 24.4174 4.28619H24.4336L27.6134 4.30203C28.5817 4.43859 29.5221 5.0792 30.0783 6.00838L31.5836 8.52358L23.9139 21.3396L15.4192 16.2416L16.6094 14.2395C17.2034 13.2401 15.6494 12.3124 15.0547 13.3133L13.4031 16.0914C13.2808 16.2974 13.245 16.5435 13.3035 16.7758C13.3621 17.0082 13.5102 17.2078 13.7156 17.3311H13.7157ZM31.0503 4.27827L40.999 4.28696H41.0171C42.2069 4.28696 43.3124 4.92718 43.9044 5.96203L48.3122 13.663C48.372 13.7675 48.452 13.859 48.5475 13.9322C48.643 14.0053 48.7522 14.0587 48.8686 14.0891C48.985 14.1195 49.1063 14.1263 49.2253 14.1092C49.3444 14.0921 49.4588 14.0513 49.562 13.9894L50.837 13.2246L47.2222 21.7606L38.0001 20.928L39.5178 20.0172C39.9464 19.7603 40.0858 19.2042 39.8288 18.7749L31.6303 5.07814C31.4608 4.79502 31.2666 4.52737 31.0503 4.27827ZM62.7239 36.2436L56.4211 24.9683C56.178 24.533 55.628 24.3765 55.1924 24.6194L53.0604 25.8059C52.045 26.3706 52.9232 27.9547 53.9393 27.3885L55.2829 26.6404L61.1451 37.1275C61.7179 38.1529 61.7066 39.4212 61.1149 40.4361L59.3074 43.5363C58.5667 44.4825 57.5721 44.718 56.8097 44.7315H53.9939L46.6268 31.4584L49.5443 29.8342C50.5597 29.2696 49.6819 27.6858 48.6651 28.2517L44.9572 30.3153C44.5208 30.5582 44.3636 31.1094 44.606 31.5467L51.9244 44.7316H41.7623L41.7032 41.0718C41.6897 40.2154 40.5517 39.8645 40.0588 40.5651L32.749 50.9582C32.6388 51.1149 32.5811 51.3026 32.5843 51.4942C32.5875 51.6858 32.6514 51.8714 32.7667 52.0244L40.41 62.1746C40.9244 62.8585 42.0506 62.4711 42.0367 61.6147L41.982 58.2695L49.9239 58.2948H49.9405C51.7816 58.2944 53.4908 57.3015 54.4002 55.7042C57.1636 50.9212 59.8964 46.118 62.6772 41.349C63.5907 39.7826 63.6084 37.8261 62.7239 36.2436ZM49.9401 56.484H49.9295L41.0658 56.4564C40.9456 56.4565 40.8265 56.4803 40.7155 56.5264C40.6044 56.5726 40.5036 56.6402 40.4187 56.7254C40.3342 56.8111 40.2677 56.9128 40.223 57.0245C40.1783 57.1363 40.1563 57.2558 40.1583 57.3762L40.1824 58.8644L34.6082 51.4619L39.9392 43.8812L39.9679 45.6521C39.9718 45.8897 40.0687 46.1162 40.238 46.2828C40.4072 46.4494 40.6351 46.5428 40.8724 46.5427H56.8319C57.104 46.5387 57.3756 46.5152 57.6444 46.4726L52.8309 54.8025C52.2399 55.8404 51.1329 56.484 49.9401 56.484ZM28.8651 45.0463C28.7098 44.8908 28.4505 44.7825 28.2251 44.7825L13.367 44.8217L18.0879 35.9214L21.3028 37.6318C22.0581 38.0341 22.9151 37.2071 22.5409 36.4364L16.99 25.0042C16.9063 24.8317 16.7701 24.6902 16.6008 24.6003C16.4316 24.5103 16.2382 24.4764 16.0485 24.5036L3.48073 26.2955C2.6336 26.4162 2.42809 27.5895 3.18375 27.9912L6.13443 29.5614L2.27246 36.5109C1.3739 38.1275 1.41356 40.1123 2.37309 41.6866C5.10099 46.2262 7.82521 50.7683 10.5569 55.3064C11.6253 57.08 13.1808 58.4056 15.3603 58.3921L20.053 58.3656C21.2138 58.3589 21.2078 56.5544 20.0433 56.5544L15.3506 56.5812C14.1735 56.5914 13.0745 55.9648 12.4734 54.9552L10.8448 52.2204C10.4612 51.3187 10.5237 50.1816 11.0318 49.2242L12.4055 46.6351L27.3251 46.5955L27.3516 56.5132L25.6589 56.5227C24.4984 56.5291 24.5045 58.3339 25.6691 58.3339L28.2635 58.3193C28.503 58.318 28.7322 58.2217 28.9009 58.0514C29.0695 57.8811 29.1637 57.6509 29.1628 57.4111L29.1324 45.6855C29.132 45.5666 29.1082 45.4489 29.0624 45.3392C29.0165 45.2295 28.9495 45.1299 28.8651 45.0462V45.0463ZM9.04969 49.2838L3.92031 40.748C3.29702 39.7253 3.27126 38.4388 3.85364 37.3915L8.16368 29.6352C8.22214 29.53 8.25907 29.4142 8.27229 29.2945C8.28552 29.1748 8.27478 29.0537 8.2407 28.9383C8.20663 28.8228 8.1499 28.7153 8.07384 28.6221C7.99778 28.5288 7.90391 28.4517 7.79771 28.3951L6.48418 27.6965L15.6509 26.3896L19.6999 34.7282L18.1384 33.8971C17.9263 33.7845 17.6783 33.7608 17.4487 33.8311C17.3351 33.8657 17.2294 33.9225 17.1378 33.9982C17.0461 34.0739 16.9703 34.1669 16.9147 34.272L9.43418 48.3755C9.27953 48.6664 9.15086 48.9704 9.04969 49.2839V49.2838Z"
          fill="#2f4f75"
        />
      </svg>
    ),
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M77.5596 30.2798C77.0739 29.5628 76.264 29.1342 75.3918 29.1342H37.6033C37.3143 28.4622 36.5164 27.2127 36.7511 26.4531C36.8639 26.0888 37.9637 25.403 38.6216 24.9933C40.0411 24.1081 41.6499 23.1052 41.6499 21.504C41.6499 19.9032 40.0416 18.8998 38.6225 18.0141C37.9652 17.6045 36.8649 16.9181 36.7525 16.5539C36.6245 16.1372 37.1394 14.9485 37.4804 14.162C38.1614 12.59 38.8661 10.9651 37.9875 9.69572C37.0911 8.40132 35.2972 8.49268 33.5613 8.58202C32.7728 8.62236 31.4529 8.68998 31.1272 8.44071C30.8002 8.19038 30.5158 6.90251 30.3461 6.13311C29.9702 4.43058 29.5824 2.66933 28.0821 2.15739C26.62 1.65814 25.2592 2.7913 23.9436 3.88779C23.2821 4.43925 22.2815 5.27307 21.8278 5.27307C21.3737 5.27307 20.3735 4.43889 19.7115 3.88732C18.3963 2.78987 17.0366 1.65624 15.5744 2.15501C14.0741 2.66708 13.685 4.42774 13.3087 6.13038C13.1389 6.89978 12.8545 8.18717 12.5274 8.43751C12.2008 8.68725 10.8811 8.61903 10.0928 8.57834C8.35695 8.48841 6.56309 8.39575 5.66586 9.69062C4.78728 10.9601 5.4914 12.5849 6.17201 14.1574C6.51285 14.9439 7.02791 16.1326 6.89941 16.5492C6.78624 16.9135 5.68629 17.5993 5.02848 18.009C3.60883 18.8943 2.00048 19.8972 2 21.4983C2 23.0987 3.60836 24.102 5.02741 24.9872C5.68474 25.3974 6.78505 26.0842 6.89739 26.4484C7.02637 26.8651 6.51048 28.0538 6.16952 28.8398C5.48855 30.4115 4.78384 32.0368 5.66242 33.3061C6.55881 34.601 8.35314 34.5088 10.0886 34.4202C10.8771 34.3795 12.197 34.3119 12.5231 34.5616C12.8497 34.8119 13.1342 36.0998 13.304 36.8692C13.6797 38.5714 14.068 40.3324 15.5678 40.8446C17.0309 41.3442 18.3907 40.211 19.7063 39.1145C20.3678 38.5631 21.3684 37.7292 21.8221 37.7292C22.2767 37.7292 23.2764 38.5635 23.9384 39.115C24.4677 39.5562 25.0045 40.0029 25.5519 40.3477L17.6721 59.9131C16.9966 61.59 18.3002 63.4489 20.094 63.4489H40.3579V71.3441H38.8757C35.8352 71.3441 33.3612 73.8157 33.3612 76.8536C33.3612 77.4677 33.86 77.9659 34.4746 77.9659H44.9227C46.3524 77.9659 46.3547 75.7414 44.9227 75.7414H35.7819C36.2394 74.4752 37.4533 73.5686 38.8756 73.5686H48.9855C50.4073 73.5686 51.6224 74.4752 52.0792 75.7414H50.2664C48.8371 75.7414 48.8347 77.9659 50.2664 77.9659H53.3865C54.0012 77.9659 54.4994 77.4676 54.4994 76.8536C54.4994 73.8157 52.0259 71.3441 48.9854 71.3441H47.5028V63.4489H62.6336C64.3245 63.4489 65.8211 62.4473 66.4454 60.8962L67.5722 58.0983C68.1066 56.7724 66.0488 55.9219 65.5065 57.2683L64.3802 60.0657C64.0962 60.7696 63.4111 61.2248 62.6336 61.2248H57.2229L62.7913 47.4037H69.4794L67.4177 52.5226C66.8839 53.849 68.9413 54.699 69.4835 53.3531L77.8148 32.6703C77.9714 32.2814 78.03 31.8601 77.9855 31.4433C77.941 31.0264 77.7948 30.6269 77.5596 30.2798ZM47.5098 61.2247L53.0781 47.4037H60.3911L54.8233 61.2247H47.5098ZM19.7716 61.0579C19.7262 60.9902 19.6825 60.8799 19.7378 60.7432L25.1108 47.4037H31.251L25.6832 61.2243H20.094C19.9117 61.2247 19.8134 61.1205 19.7716 61.0579ZM21.8231 35.5047H21.8221C20.5612 35.5047 19.4014 36.4715 18.2798 37.4058C17.7463 37.8507 16.6366 38.7809 16.2891 38.7406C15.963 38.5875 15.6235 37.0475 15.4782 36.3899C15.1689 34.9885 14.8492 33.5397 13.8773 32.7958C13.1953 32.274 12.2648 32.1535 11.2753 32.1535C10.8476 32.1535 10.4087 32.1758 9.97445 32.1986C9.30179 32.2328 7.72598 32.3139 7.49725 32.047C7.34927 31.716 7.93238 30.3705 8.21253 29.7242C8.79434 28.382 9.39597 26.9949 9.02485 25.7927C8.66762 24.6364 7.47266 23.8907 6.20669 23.1009C5.61432 22.7316 4.22674 21.8654 4.22674 21.4984C4.22674 21.1309 5.61468 20.2661 6.20764 19.8963C7.47314 19.1074 8.66904 18.3617 9.02627 17.2055C9.39787 16.0032 8.79659 14.6162 8.21538 13.2736C7.93559 12.627 7.35248 11.2816 7.4963 10.9577C7.72966 10.6838 9.305 10.7654 9.97777 10.8002C11.4163 10.8743 12.9045 10.9512 13.881 10.2041C14.8533 9.46021 15.1735 8.01111 15.4829 6.61005C15.6281 5.95242 15.9686 4.41243 16.2831 4.2633C16.6449 4.22616 17.7514 5.15027 18.2844 5.59518C19.4061 6.52997 20.5659 7.49667 21.8267 7.49762H21.8277C23.0886 7.49762 24.2484 6.53033 25.37 5.59601C25.9035 5.1511 27.0146 4.22474 27.3607 4.26176C27.6868 4.41433 28.0263 5.95479 28.1716 6.61243C28.4809 8.01336 28.8006 9.46258 29.7729 10.2065C30.7491 10.9536 32.2367 10.8775 33.6758 10.8034C34.3485 10.7686 35.9239 10.6884 36.1525 10.9553C36.3005 11.2854 35.7174 12.6312 35.4373 13.2778C34.8555 14.6199 34.2538 16.0074 34.6249 17.2096C34.9822 18.3659 36.1771 19.1116 37.4431 19.9009C38.0356 20.2707 39.4231 21.1369 39.4231 21.5039C39.4231 21.8714 38.0351 22.7362 37.4422 23.1056C36.1767 23.8949 34.9807 24.6406 34.6235 25.7969C34.3067 26.8216 34.6977 27.982 35.1803 29.1342H32.8523C31.1615 29.1342 29.6653 30.1356 29.0399 31.6869L26.4031 38.234C26.0227 37.9559 25.6253 37.6245 25.3649 37.4071C24.2437 36.472 23.0839 35.5053 21.8231 35.5047ZM31.1062 32.5173C31.3897 31.8134 32.0753 31.3587 32.8528 31.3587H37.7154L32.1476 45.1792H26.0061L31.1062 32.5173ZM28.0834 61.2247L33.6512 47.4037H40.9647L35.3959 61.2247H28.0834ZM47.4291 31.3587L41.8605 45.1792H34.5479L40.1157 31.3587H47.4291ZM57.1428 31.3587L51.5741 45.1792H44.261L49.8292 31.3587H57.1428ZM59.5425 31.3587H66.8555L61.2878 45.1792H53.9743L59.5425 31.3587ZM43.3649 47.4037H50.6783L45.1096 61.2247H37.7966L43.3649 47.4037ZM45.2766 63.4489V71.3441H42.5845V63.4489H45.2766ZM69.2557 31.3587H75.3918C75.64 31.3587 75.8469 31.5955 75.7485 31.8392L70.3761 45.1797H63.6876L69.2557 31.3587Z"
          fill="#2f4f75"
        />
        <path
          d="M31.9598 21.5029C31.9606 15.7478 27.4144 11.0651 21.8261 11.0647H21.8244C20.9429 11.0647 20.0676 11.1818 19.2219 11.4122C18.2718 11.6712 18.1331 12.9619 18.9699 13.4393C19.7261 13.8708 20.9819 13.2887 21.8261 13.2887C26.1864 13.2896 29.7334 16.9741 29.7329 21.5019C29.7329 23.7028 28.9054 25.7698 27.4022 27.3223C25.9104 28.8643 23.9295 29.7133 21.8244 29.7133H21.8234C19.7182 29.7133 17.7369 28.8634 16.2449 27.3205C14.7429 25.7675 13.9161 23.7005 13.9161 21.4996C13.9167 19.4141 14.6704 17.4268 16.039 15.9026C16.9942 14.8394 15.338 13.3521 14.382 14.4167C12.6459 16.3498 11.6899 18.8649 11.6895 21.4997C11.6895 24.2799 12.7383 26.8965 14.6441 28.8662C16.5591 30.8469 19.1091 31.9369 21.8229 31.9379H21.8244C24.5381 31.9379 27.0883 30.8473 29.0032 28.8685C30.9093 26.8997 31.9596 24.2835 31.9596 21.5029H31.9598Z"
          fill="#2f4f75"
        />
      </svg>
    ),
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M38.7472 27.8337C40.7805 24.9762 41.855 21.6065 41.855 18.089C41.855 8.80376 34.2938 1.25 24.9996 1.25C22.7143 1.25 20.4983 1.69902 18.4121 2.58475C17.5891 2.9341 18.1253 4.21875 18.9571 3.86532C20.8698 3.05329 22.9027 2.6416 24.9996 2.6416C33.5257 2.6416 40.462 9.57118 40.462 18.089C40.462 21.3157 39.4762 24.4068 37.6117 27.0277C35.7873 29.5923 33.2668 31.5176 30.3233 32.5961C30.1895 32.6453 30.074 32.7344 29.9925 32.8512C29.9109 32.9681 29.8672 33.1071 29.8672 33.2496V34.7348L25.6966 34.9815V28.7037L27.7864 26.7543C28.7467 26.7256 31.8463 26.4705 33.8957 24.4231C36.2942 22.0266 36.2359 18.1921 36.2324 18.0301C36.2284 17.851 36.1554 17.6803 36.0287 17.5536C35.902 17.4269 35.7312 17.3538 35.5519 17.3497C35.3896 17.346 31.5515 17.2879 29.1524 19.6844C27.1282 21.7065 26.854 24.753 26.8197 25.7524L25.6966 26.7998V20.0949C26.0426 19.725 26.7431 18.9124 27.3371 17.8173C27.7638 17.0319 26.54 16.3674 26.1131 17.1543C25.7677 17.79 25.3777 18.3191 25.0693 18.6955C25.0466 18.6931 25.0234 18.6917 25.0002 18.6917C24.977 18.6917 24.9537 18.6932 24.9311 18.6954C24.2103 17.8141 23.039 16.0833 23.039 14.144C23.039 12.1404 24.2898 10.3592 25.0007 9.50832C25.7129 10.3566 26.9608 12.1317 26.9608 14.144C26.9608 14.3052 26.9526 14.4702 26.9364 14.6343C26.849 15.5232 28.235 15.6612 28.323 14.7706C28.3434 14.5624 28.3537 14.3533 28.3537 14.144C28.3537 10.7552 25.5986 8.0848 25.481 7.97288C25.3515 7.8491 25.1791 7.78002 24.9999 7.78002C24.8206 7.78002 24.6483 7.8491 24.5187 7.97288C24.4012 8.0848 21.646 10.7549 21.646 14.144C21.646 17.0221 23.6324 19.3809 24.3037 20.0958V26.7969L23.1792 25.7445C23.1438 24.7373 22.8658 21.7013 20.8465 19.6841C18.4477 17.2876 14.609 17.3456 14.4474 17.3497C14.2681 17.3538 14.0974 17.4268 13.9706 17.5534C13.8439 17.6801 13.7709 17.8507 13.7669 18.0298C13.7631 18.1916 13.7047 22.0261 16.1032 24.4228C18.1593 26.4768 21.2711 26.7273 22.2209 26.7543L24.3037 28.7037V35.0636L20.1324 35.3109V33.2493C20.1323 33.1068 20.0884 32.9678 20.0068 32.851C19.9251 32.7342 19.8095 32.6452 19.6756 32.5961C16.7323 31.5176 14.2122 29.592 12.3875 27.0271C10.5229 24.4062 9.53745 21.3154 9.53745 18.0887C9.53745 15.6093 10.1074 13.2415 11.2311 11.0516C12.3039 8.96155 13.8695 7.1118 15.7582 5.70283C16.4822 5.16244 15.6403 4.05465 14.9247 4.58754C12.8663 6.1232 11.1608 8.13869 9.99159 10.4166C8.76578 12.805 8.14448 15.3863 8.14448 18.0886C8.14448 21.6062 9.21911 24.9757 11.2519 27.8331C13.1455 30.4946 15.7268 32.5248 18.7394 33.7277V35.3932C15.7761 35.4573 15.7329 39.9873 18.7394 39.9191V41.6862C15.656 41.7868 15.9032 46.4179 19.0244 46.1975C19.6178 47.6912 21.0781 48.75 22.7816 48.75H27.2176C29.1843 48.75 30.8265 47.3395 31.1861 45.478L32.1725 45.4194C35.0696 45.2475 34.8354 40.7344 31.9046 40.9072L31.2598 40.9452V39.2778C31.2598 39.2451 31.2583 39.2129 31.2572 39.1805L32.1725 39.1265C35.0661 38.9554 34.8418 34.4403 31.9046 34.614L31.2598 34.6519V33.728C34.2727 32.5248 36.854 30.4951 38.7472 27.8337ZM30.1376 20.6684C31.5558 19.2512 33.701 18.8755 34.8064 18.7761C34.7088 19.8789 34.3351 22.0162 32.9111 23.4388C31.4925 24.8556 29.3477 25.2316 28.2423 25.3308C28.3395 24.2283 28.7133 22.091 30.1376 20.6684ZM15.1947 18.7766C16.3009 18.8758 18.4445 19.2524 19.8616 20.6684C21.238 22.0431 21.633 24.1018 21.7459 25.2319C21.7222 25.2509 21.6998 25.2715 21.6788 25.2934C21.6701 25.303 21.6623 25.3131 21.6541 25.323C20.5247 25.2119 18.4701 24.8196 17.0882 23.4388C15.6708 22.0226 15.2945 19.8812 15.1947 18.7766ZM32.0398 36.0017C33.1267 36.0017 33.1759 37.6729 32.0897 37.7372L18.7419 38.5276C18.502 38.5426 18.2727 38.4594 18.0968 38.2956C18.0104 38.2155 17.9413 38.1186 17.8938 38.0108C17.8463 37.903 17.8215 37.7866 17.8209 37.6688C17.8187 37.4459 17.9024 37.2307 18.0547 37.0677C18.207 36.9048 18.4161 36.8066 18.6389 36.7935L31.987 36.0029C32.0048 36.002 32.0225 36.0017 32.0399 36.0017H32.0398ZM32.6318 42.5284C33.1756 43.0358 32.8317 43.9863 32.09 44.0301L28.7658 44.227C27.8734 44.2797 27.9543 45.6682 28.8484 45.6163L29.7249 45.5644C29.3691 46.6064 28.3798 47.3584 27.2175 47.3584H22.7816C21.8334 47.3584 21.0011 46.8583 20.5328 46.1089L25.6908 45.8033C26.5834 45.7505 26.5022 44.3638 25.6084 44.4143L18.7419 44.821C17.6224 44.8885 17.5216 43.1529 18.6389 43.0867L31.987 42.2965C32.1046 42.289 32.2225 42.3057 32.3335 42.3456C32.4444 42.3855 32.5459 42.4477 32.6318 42.5284ZM20.1324 41.6039V39.8393L29.8662 39.2633C29.8662 39.2679 29.8668 39.2729 29.8668 39.2778V41.0277L20.1324 41.6039ZM10.8872 5.39118C11.5088 6.02664 12.5065 5.05631 11.884 4.41877L9.15871 1.63096C8.53422 0.991719 7.53648 1.96287 8.16216 2.6033L10.8872 5.39118ZM4.65769 7.4443L8.0121 9.43291C8.77537 9.88491 9.49621 8.69444 8.72306 8.23643L5.36844 6.24759C4.59937 5.79189 3.88722 6.9877 4.65769 7.4443ZM2.5265 13.0267L6.28222 14.0802C7.14177 14.3211 7.5214 12.9823 6.65866 12.7405L2.90315 11.6869C2.04182 11.4457 1.66427 12.7852 2.5265 13.0266V13.0267ZM5.8231 19.0167C6.71237 19.0167 6.72218 17.6358 5.83157 17.6251L1.93098 17.5787C1.03918 17.5505 1.01251 18.9596 1.91471 18.97L5.815 19.0164C5.81797 19.0167 5.82072 19.0167 5.8231 19.0167ZM7.14504 23.0593C7.1225 22.9708 7.08271 22.8875 7.02794 22.8143C6.97317 22.7412 6.90449 22.6795 6.82584 22.6328C6.74718 22.5862 6.66009 22.5555 6.56956 22.5425C6.47902 22.5295 6.38681 22.5345 6.29819 22.5572L2.51862 23.5211C1.65209 23.7418 1.99658 25.0905 2.86311 24.8692L6.64268 23.9056C7.01533 23.8108 7.24021 23.4315 7.14504 23.0593ZM8.97476 27.4666C8.78666 27.1315 8.36186 27.0124 8.02666 27.2004L4.62552 29.1084C3.84457 29.547 4.53117 30.7577 5.30752 30.3217L8.70858 28.4138C9.04408 28.2256 9.16309 27.8018 8.97469 27.4666H8.97476Z"
          fill="#2f4f75"
        />
        <path
          d="M10.8997 31.239L8.10858 33.9616C7.47732 34.5774 8.43732 35.5857 9.08187 34.9571L11.8725 32.2348C12.5126 31.6106 11.5402 30.6136 10.8997 31.239ZM39.1121 31.2509C38.4876 30.6113 37.4899 31.5828 38.1156 32.2227L40.8406 35.0111C41.4621 35.6471 42.4604 34.6762 41.8374 34.0393L39.1121 31.2509ZM45.3421 29.1977L41.9874 27.2091C41.2184 26.7537 40.5062 27.9492 41.2767 28.4055L44.6312 30.3942C45.3944 30.8464 46.1149 29.656 45.3421 29.1977ZM47.4728 23.6147L43.7173 22.5618C42.8566 22.32 42.4784 23.6596 43.3406 23.9014L47.0964 24.9544C47.9563 25.196 48.3356 23.8567 47.4728 23.6147ZM48.0848 17.6717L44.1845 17.6253C43.2927 17.5971 43.2661 19.0062 44.1677 19.0166L48.0686 19.063C48.96 19.0915 48.9871 17.6824 48.0848 17.6717ZM42.8543 13.5827C42.9468 13.9451 43.3401 14.1771 43.7013 14.0849L47.4809 13.1209C48.3474 12.9003 48.0041 11.5507 47.1364 11.7727L43.3565 12.7365C42.9843 12.8313 42.7593 13.2099 42.8543 13.5827ZM41.0245 9.17539C41.2082 9.50158 41.6484 9.6233 41.9732 9.44094L45.3741 7.533C46.1538 7.09556 45.473 5.88193 44.6921 6.31975L41.291 8.22828C40.9557 8.41643 40.8362 8.84029 41.0245 9.17539ZM38.6139 5.60131C38.7894 5.60131 38.965 5.53526 39.1005 5.403L41.8911 2.68065C42.5309 2.05618 41.5588 1.05949 40.9183 1.68479L38.1272 4.40743C37.6924 4.83129 37.9966 5.60131 38.6139 5.60131Z"
          fill="#2f4f75"
        />
      </svg>
    ),
  ];


  const services = [
    {
      title: "CONSULTANT",
      subtitle: "Software",
      checklist: ["Concept", "Design", "Guideline"],
      icon: svgIcons[0],
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Hardware",
      checklist: ["Technology", "Facility", "Infrastructure"],
      icon: svgIcons[1],
    },
    {
      title: "HUMAN CAPITAL",
      subtitle: "Brainware",
      checklist: ["Awareness", "Attitude", "People Orientation"],
      icon: svgIcons[2],
    },
  ];

  return (
    <div ref={sectionRef} className="service-area-2 space-bottom overflow-hidden mt-4">
    <div className="container container2">
      <div className="row justify-center">
        <div className="col-xl-6 col-lg-8">
          <div className="title-area text-center">
            <span className="sub-title" style={fadeInStyle(0.2)}>
              OUR SERVICES
            </span>
            <h2 className="sec-title" style={fadeInStyle(0.3)}>
              abrakadabra
            </h2>
            <h2 className="sec-title" style={fadeInStyle(0.4)}>
              Preserving The Earth
            </h2>
            <h2 className="sec-title" style={fadeInStyle(0.4)}>
              For Future Generations
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
        {services.map((service, index) => (
          <div key={service.title} className="w-full sm:w-1/2 md:w-1/3 p-2" style={fadeInStyle(0.5 + index * 0.1)}>
            <div className="service-card style2">
              <div className="service-card_icon flex justify-center items-center">
                {service.icon}
              </div>
              <div className="service-card_content">
                <h3 className="service-card_title">
                  <a href="#">{service.title}</a>
                </h3>
                <h5>{service.subtitle}</h5>
                <div className="checklist mb-30 mt-25">
                  <ul>
                    {service.checklist.map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Services;
