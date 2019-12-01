import React from "react"
import Nav from "./nav"
import ContactModal from "../components/contactModal"
import CloseButton from "../components/closeButton"
import Footer from "./footer"
import { useGlobal } from "../state/state"
import { Box } from "rebass"
import GlobalLayout from "./global"

function PageLayout({ children }) {
  const [{ isContactOpen }, globalActions] = useGlobal()
  return (
    <GlobalLayout>
      <Box
        sx={{
          minHeight: "110vh",
        }}
      >
        <Nav onOpenClick={() => globalActions.openModal()} />

        {children}

        <Footer />
      </Box>

      <ContactModal
        onCloseClick={() => globalActions.closeModal()}
        isOpen={isContactOpen}
      >
        <CloseButton onClick={() => globalActions.closeModal()} />
      </ContactModal>
    </GlobalLayout>
  )
}

export default PageLayout
