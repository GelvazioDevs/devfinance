package devfinance.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import devfinance.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{    
    Optional<Usuario> findUsuarioByEmailAndSenha(String email, String senha);
}
