//su dung template tren stripo
export const activateEmailTemplate = (to, url) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="vi" style="font-family:Montserrat, sans-serif">
  <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Template</title><!--[if (mso 16)]>
  <style type="text/css">
  a {text-decoration: none;}
  </style>
  <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG></o:AllowPNG>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
  #outlook a {
  padding:0;
  }
  .es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:42px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:42px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:16px!important; display:block!important; border-right-width:0px!important; border-left-width:0px!important; border-bottom-width:15px!important; border-top-width:15px!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
  </style>
  </head>
  <body style="width:100%;font-family:Montserrat, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="vi" style="background-color:#FFFFFF"><!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
  <v:fill type="tile" color="#ffffff"></v:fill>
  </v:background>
  <![endif]-->
  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
  <tr>
  <td valign="top" style="padding:0;Margin:0">
  <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
  <tr>
  <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://ayashop.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:14px"><img class="adapt-img" src="https://fbhxeil.stripocdn.email/content/guids/CABINET_5e2fb44e72ca2eeb8428e943ae122d3d805b6bf490651e914d00d1cdcd5a2942/images/logo.png" alt="ayashop" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="34" title="ayashop"></a></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td style="padding:0;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr class="links">
  <td align="center" valign="top" width="25%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">SHOP</a></td>
  <td align="center" valign="top" width="25%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">PHỤ KIỆN</a></td>
  <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">MỚi</a></td>
  <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">GIẢM GIÁ</a></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
  <tr>
  <td align="left" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:40px">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fbhxeil.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="100"></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:36px;font-style:normal;font-weight:normal;color:#333333">Xác minh email của bạn để hoàn tất đăng ký</h2></td>
  </tr>
  <tr>
  <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:40% !important;display:inline-table" role="presentation">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="center" class="es-m-p0r" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:24px;color:#333333;font-size:16px">Cảm ơn bạn đã lựa chọn AYASHOP</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:24px;color:#333333;font-size:16px">Vui lòng xác nhận rằng <b>${to}</b> là địa chỉ email của bạn bằng cách nhấp vào nút bên dưới hoặc sử dụng liên kết này <b>baolamlink</b> trong vòng 48 giờ.</p></td>
  </tr>
  <tr>
  <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:40% !important;display:inline-table" role="presentation">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href=${url} target="_blank" hidden>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href=${url}
  style="height:39px; v-text-anchor:middle; width:201px" arcsize="0%" stroke="f" fillcolor="#ffffff">
  <w:anchorlock></w:anchorlock>
  <center style='color:#666666; font-family:Montserrat, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>xác minh email</center>
  </v:roundrect></a>
  <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#999999;background:#ffffff;border-width:1px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href=${url} class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#666666;font-size:16px;padding:10px 30px 10px 30px;display:inline-block;background:#ffffff;border-radius:0px;font-family:Montserrat, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #ffffff">xác minh email </a></span><!--<![endif]--></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:36px;font-style:normal;font-weight:normal;color:#333333">Cần giúp đỡ?</h2></td>
  </tr>
  <tr>
  <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:40% !important;display:inline-table" role="presentation">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:660px" cellpadding="0" cellspacing="0"><tr><td style="width:310px" valign="top"><![endif]-->
  <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
  <tr>
  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:310px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333">Hỏi tại</h3></td>
  </tr>
  <tr>
  <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="mailto:" target="_blank" hidden>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="mailto:"
  style="height:39px; v-text-anchor:middle; width:309px" arcsize="0%" stroke="f" fillcolor="#ffffff">
  <w:anchorlock></w:anchorlock>
  <center style='color:#666666; font-family:Montserrat, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>help@ayashop.com</center>
  </v:roundrect></a>
  <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#999999;background:#ffffff;border-width:1px;display:block;border-radius:0px;width:auto;mso-hide:all"><a href="" class="es-button msohide" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#666666;font-size:16px;padding:10px 30px 10px 30px;display:block;background:#ffffff;border-radius:0px;font-family:Montserrat, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #ffffff;mso-hide:all;padding-left:30px;padding-right:30px">help@ayashop.com</a></span><!--<![endif]--></td>
  </tr>
  </table></td>
  </tr>
  </table><!--[if mso]></td><td style="width:40px"></td><td style="width:310px" valign="top"><![endif]-->
  <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
  <tr>
  <td align="left" style="padding:0;Margin:0;width:310px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333">Thăm của chúng tôi</h3></td>
  </tr>
  <tr>
  <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
  style="height:39px; v-text-anchor:middle; width:309px" arcsize="0%" stroke="f" fillcolor="#ffffff">
  <w:anchorlock></w:anchorlock>
  <center style='color:#666666; font-family:Montserrat, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>Trung tâm trợ giúp</center>
  </v:roundrect></a>
  <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#999999;background:#ffffff;border-width:1px;display:block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1620385738243 msohide" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#666666;font-size:16px;padding:10px 30px;display:block;background:#ffffff;border-radius:0px;font-family:Montserrat, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #ffffff;mso-hide:all">Trung tâm trợ giúp</a></span><!--<![endif]--></td>
  </tr>
  </table></td>
  </tr>
  </table><!--[if mso]></td></tr></table><![endif]--></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="left" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:660px" cellpadding="0" cellspacing="0"><tr><td style="width:320px" valign="top"><![endif]-->
  <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
  <tr>
  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:320px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333">Hãy chia sẽ ngay</h3></td>
  </tr>
  </table></td>
  </tr>
  </table><!--[if mso]></td><td style="width:20px"></td><td style="width:320px" valign="top"><![endif]-->
  <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
  <tr>
  <td align="center" style="padding:0;Margin:0;width:320px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:30px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Facebook" src="https://fbhxeil.stripocdn.email/content/assets/img/social-icons/square-black-bordered/facebook-square-black-bordered.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:30px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Twitter" src="https://fbhxeil.stripocdn.email/content/assets/img/social-icons/square-black-bordered/twitter-square-black-bordered.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:30px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Instagram" src="https://fbhxeil.stripocdn.email/content/assets/img/social-icons/square-black-bordered/instagram-square-black-bordered.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Youtube" src="https://fbhxeil.stripocdn.email/content/assets/img/social-icons/square-black-bordered/youtube-square-black-bordered.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table><!--[if mso]></td></tr></table><![endif]--></td>
  </tr>
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="left" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="left" style="padding:20px;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:18px;color:#333333;font-size:12px">Bạn nhận được email này vì bạn đã truy cập trang web của chúng tôi hoặc hỏi chúng tôi về bản tin thường xuyên. Đảm bảo thư của chúng tôi đến được Hộp thư đến của bạn (chứ không phải thư mục số lượng lớn hoặc thư rác của bạn).<a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px;line-height:18px" href="https://viewstripo.email">Privacy police</a> | <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px;line-height:18px" href="">Unsubscribe</a></p></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
  <tr>
  <td align="left" style="padding:20px;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:14px;font-size:0px;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=fashion_17&utm_content=finishing_signing_up" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://fbhxeil.stripocdn.email/content/guids/CABINET_5e2fb44e72ca2eeb8428e943ae122d3d805b6bf490651e914d00d1cdcd5a2942/images/logo.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  </div>
  </body>
  </html>`;
};
