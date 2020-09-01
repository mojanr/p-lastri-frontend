import React, { memo, FunctionComponent } from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  width: 345px;
`

const TermsAndConditionsComponent: FunctionComponent = () => {
  return (
    <ContentContainer>
      <p> 1. Data yang diinputkan dan file yang diupload ke dalam sistem sesuai dengan dokumen <b> ASLI </b> </p>
      <p> 2. Jika data file tidak sesuai dengan dokumen <b> ASLI </b> maka <b> PENDAFTAR </b> siap menerima sanksi ditolak pendaftaran sampai dengan sanksi <b> HUKUM </b> </p>
    </ContentContainer>
  )
}

export default memo(TermsAndConditionsComponent)
